import {Request, Response, NextFunction} from 'express'
import fs from 'fs'
import csvtojson from 'csvtojson'

export const versionCheck = (req:Request, res:Response, next:NextFunction)=>{
    const stats = fs.statSync('data/list.csv')
    const time = Math.floor(stats.mtime.getTime()/1000)
    res.status(200).json({
        result:true,
        version:time
    })
}

export const download = async (req:Request, res:Response, next:NextFunction)=>{
    const data = await csvtojson().fromFile('data/list.csv')
    data.map((val:any)=>{
        val.mainCategory = val.category.split('-')[0]
        val.subCategory = val.category.split('-')[1]
        return val
    })
    res.status(200).json({
        result:true,
        data
    })
}