import {Request, Response, Router} from 'express'
import * as data from './data'

const router = Router()

router.get('',(req:Request,res:Response)=>{ res.send() })
router.get('/data/:location/latest/version',data.versionCheck)
router.get('/data/:location/latest/download',data.download)

export = router