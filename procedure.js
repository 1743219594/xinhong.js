// 微信小程序后端接口代码 ！！！！！！
const express = require('express')
const app = express()
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const mysql = require('mysql')
const lock = require('async-lock')
const axios=require('axios')
const { log } = require('console')
const ansyclock1 = new lock()
const ansyclock2 = new lock()
const ansyclock3 = new lock()
const ansyclock4 = new lock()
const ansyclock5 = new lock()
const ansyclock6 = new lock()
const ansyclock7 = new lock()
const ansyclock8 = new lock()
const ansyclock9 = new lock()
const ansyclock10 = new lock()
const ansyclock11 = new lock()
const ansyclock12 = new lock()
const ansyclock13 = new lock()
const ansyclock14 = new lock()
const ansyclock15 = new lock()
const ansyclock16 = new lock()
const ansyclock17 = new lock()
const ansyclock18 = new lock()
const ansyclock19 = new lock()
const ansyclock20 = new lock()
const ansyclock21 = new lock()
const ansyclock22 = new lock()
const ansyclock23 = new lock()
const ansyclock24 = new lock()
const ansyclock25 = new lock()
const ansyclock26 = new lock()
const ansyclock27 = new lock()
const ansyclock28 = new lock()
const ansyclock29 = new lock()
const ansyclock30 = new lock()
const ansyclock31 = new lock()
const ansyclock32 = new lock()
const ansyclock33 = new lock()
const ansyclock34 = new lock()
const ansyclock35 = new lock()
const ansyclock36 = new lock()
const ansyclock37 = new lock()
const ansyclock38 = new lock()
const ansyclock39 = new lock()
const url='https://api.weixin.qq.com/sns/jscode2session'
const appid='wx3ddc0ddad04bc402'
const secret='e9f68024fa4c4d18c7b5d9403e8e7ad6'
const grant_type='authorization_code'

// 数据库配置
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'xinhong'
})
app.use(cors())
app.use(express.static(path.join(__dirname, 'avator')))
app.use(express.static(path.join(__dirname, 'photo')))
/* 用户头像 */
var avatorurl = ''
/* 咨询师位置 */
let photourl = []
/* 咨询师头像 */
var teacher_avator=''
var tweet_photo=''
var contentphoto=''
/* 配置头像文件储存路径 */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '/avator/'))
    },
    filename: (req, file, cb) => {
        avatorurl = path.join("http://175.178.122.99/", file.originalname).replace(/\\/g, '/').replace(/:\//g, '://')
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })
/* 配置帖子图片储存路径 */
const storage1 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '/photo/'))
    },
    filename: (req, file, cb) => {
        photourl.push(path.join("http://175.178.122.99/", file.originalname).replace(/\\/g, '/').replace(/:\//g, '://'))
        cb(null, file.originalname)
    }
})

const upload1 = multer({ storage: storage1 })
/* 推文图片 */
const storage2 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '/photo/'))
    },
    filename: (req, file, cb) => {
       tweet_photo=path.join("http://175.178.122.99/", file.originalname).replace(/\\/g, '/').replace(/:\//g, '://')
        cb(null, file.originalname)
    }
})
/* 推文内容图片 */
const storage4 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '/photo/'))
    },
    filename: (req, file, cb) => {
       contentphoto=path.join("http://175.178.122.99/", file.originalname).replace(/\\/g, '/').replace(/:\//g, '://')
        cb(null, file.originalname)
    }
})

const upload4 = multer({ storage: storage4 })

const upload2 = multer({ storage: storage2 })
/* 咨询师头像图片 */
const storage3 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '/photo/'))
    },
    filename: (req, file, cb) => {
       teacher_avator=path.join("http://175.178.122.99/", file.originalname).replace(/\\/g, '/').replace(/:\//g, '://')
        cb(null, file.originalname)
    }
})

const upload3 = multer({ storage: storage3 })

app.use(cors())
app.use(express.urlencoded({ extended: false }))
/* 上传图片接口 */
app.post('/api/photo', upload1.any(), (req, res) => {
    
        res.send({
            status: 1,
            message: '上传成功'
        })
      
 
})
/* 上传推文内容图片接口 */
app.post('/api/contentphoto', upload4.any(), (req, res) => {
    
    res.send({
        status: 1,
        message: '上传成功'
    })
  

})
/* 获取openid并传回前端 */
app.post('/api/getcode',(req,res)=>{
       
    ansyclock27.acquire('mylock27',(done)=>{
       let code=req.body.code
        axios.get(`${url}?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=${grant_type}`).then((response)=>{
            res.send({
                    status:200,
                    openid:response.data.openid
            })
        }).catch(error=>{
            res.send({
                status:202,
                message:'获取失败'
            })
        })
        done()
    })
})
/*删除指定的备忘录 */
app.post('/api/delete_bei',(req,res)=>{
       
    ansyclock37.acquire('mylock27',(done)=>{

        let id=req.body.id
        let sql='delete from notes where id=?'
        db.query(sql,[id],(err, results) => {

            if (err) {
                
               return res.send({
                    status: 200,
                    message: '查询数据库失败'
                })
            }
                  
            else{
               res.send({
                      status: 202,
                })}
    
        })
    
        done()
    })
})
/* 上传咨询师头像接口 */
app.post('/api/teacher_avator', upload3.any(), (req, res) => {
    
    res.send({
        status: 1,
        message: '上传成功'
    })


})


/* 获取指定推文 */
app.post('/api/gettweet', (req, res) => {

    ansyclock17.acquire('mylock17',(done)=>{
        let id=req.body.id
        let sqlstr = 'select * from tweet where id=?'
    db.query(sqlstr,  [id],(err, results) => {

        if (err) {
            
           return res.send({
                status: 202,
                message: '查询数据库失败'
            })
        }
        if(results.length>0)
       {res.send({
            status:200,
            data:results
            
})}             
        else{
           res.send({
                  status: 202,
            })}

    })
    done()
    })
   
})
/* 添加备忘录 */
app.post('/api/addnote', (req, res) => {

    ansyclock34.acquire('mylock34',(done)=>{
        let title=req.body.title
        let content=req.body.content
        let time=req.body.time
        let studentid=req.body.studentid
        let sqlstr = 'insert into notes values(NULL,?,?,?,?)'
    db.query(sqlstr,  [title,content,time,studentid],(err, results) => {

        if (err) {
            
           return res.send({
                status: 200,
                message: '查询数据库失败'
            })
        }
              
        else{
           res.send({
                  status: 202,
            })}

    })
    done()
    })
   
})
/* 获取某个人的备忘录 */
app.post('/api/getnotes', (req, res) => {
    ansyclock35.acquire('mylock35',(done)=>{
        
        let id=req.body.id
        let sqlstr = 'select * from notes where studentid=? order by id desc'
    db.query(sqlstr,  [id],(err, results) => {

        if (err) {
       
           return res.send({
                status: 202,
                message: '查询数据库失败'
            })
        }
        if(results.length>=0)
       {res.send({
            status:200,
           data:results
            })
        }             
        

    })
    done()
    })
   
})
/* 更新某个人的备忘录 */
app.post('/api/updatenotes', (req, res) => {
    ansyclock36.acquire('mylock36',(done)=>{
        
        let id=req.body.id
        let title=req.body.title
        let content=req.body.content
        let time=req.body.time
        let sqlstr = 'update notes set title=?,content=?,time=? where id=?'
    db.query(sqlstr,  [title,content,time,id],(err, results) => {

        if (err) {
        
           return res.send({
                status: 202,
                message: '失败'
            })
        }
        else{
            res.send({
                status:200,
                message:'成功'
            })
        }         
        

    })
    done()
    })
   
})
/* 获取是否有未读的消息 */
app.post('/api/getnomessage', (req, res) => {

    ansyclock28.acquire('mylock28',(done)=>{
        let com_id=req.body.com_id
        let id=req.body.id
        let hasread='false'
        let sqlstr = 'select * from com_reply where to_id=? and hasread=? and com_id=?'
    db.query(sqlstr,  [id,hasread,com_id],(err, results) => {

        if (err) {
            
           return res.send({
                status: 202,
                message: '查询数据库失败'
            })
        }
        if(results.length>0)
       {res.send({
            status:200
           
            
})}             
        else{
           res.send({
                  status: 202,
            })}

    })
    done()
    })
   
})
/* 点赞推文 */
app.post('/api/addlike',(req,res)=>{
    ansyclock18.acquire('mylock18',(done)=>{
        let id=req.body.id
        let likenum=parseInt(req.body.likenum)+1
        let integral=parseInt(req.body.integral)+2
        let studentid=req.body.studentid
        let sqlstr='update tweet set like_num=? where id=?'
        db.query(sqlstr,[likenum,id],(err,results)=>{
            if(err){
                res.send({
                    status:200,
                    message:'更新错误'
                })
            }
            else{
                let sqlStr='insert into tweet_like values (?,?)'
                db.query(sqlStr,[studentid,id],(err,results)=>{
                    if(err){
                     
                        res.send({
                            status:200,
                            message:'更新错误'
                        })
                    }
                    else{
                        let sqlStr='update user set integral=? where studentid=?'
                db.query(sqlStr,[integral,studentid],(err,results)=>{
                    if(err)
                    {
                        res.send({
                            status:200,
                            message:'点赞失败'
                        })
                    }
                    else{
                        res.send({
                            status:202,
                            message:'点赞成功'
                        })
                    }
                })
                    }
                })
            }
        })
        done()
    })
})
/* 阅读数加1 */
app.post('/api/addread',(req,res)=>{
    ansyclock24.acquire('mylock24',(done)=>{
        let studentid=req.body.studentid
        let integral=parseInt(req.body.integral)+2
        let id=req.body.id
        let readnum=parseInt(req.body.readnum)+1
       
        let sqlstr='update tweet set read_num=? where id=?'
  
        db.query(sqlstr,[readnum,id],(err,results)=>{
            if(err){
                res.send({
                    status:200,
                    message:'更新错误'
                })
            }
            else{
                let sqlStr='update user set integral=? where studentid=?'
                db.query(sqlStr,[integral,studentid],(err,results)=>{
                    if(err)
                    {  
                        res.send({
                            status:200,
                            message:'点赞失败'
                        })
                    }
                    else{
                        res.send({
                            status:202,
                            message:'点赞成功'
                        })
                    }
                })
            }
        })
        done()
    })
})
/* 删除推文 */
app.post('/api/cancel_tweet',(req,res)=>{
    ansyclock39.acquire('mylock39',(done)=>{
      
       let title=req.body.title
       
        let sqlstr='delete from tweet where  title=?'
   
        db.query(sqlstr,[title],(err,results)=>{
            if(err){
               
                res.send({
                    status:200,
                    message:'更新错误'
                })
            }
            if(results.affectedRows>=1)
            {
               
                    res.send({
                      status:202,
                      message:'更新成功'
                    })
                  
            }
            else{
                res.send({
                    status:200,
                    message:'更新错误'
                })
            }
        })
        done()
    })
})
/* 删除评论 */
app.post('/api/cancel_comment',(req,res)=>{
    ansyclock30.acquire('mylock30',(done)=>{
      
        let integral=parseInt(req.body.integral)-2
        let reply_id=req.body.reply_id
        let studentid=req.body.studentid
       
        let sqlstr='delete from tweet_reply where  id=?'
   
        db.query(sqlstr,[reply_id],(err,results)=>{
            if(err){
              
                res.send({
                    status:200,
                    message:'更新错误'
                })
            }
            else{
                let sqlStr='update user set integral=? where studentid=?'
                db.query(sqlStr,[integral,studentid],(err,results)=>{
                    if(err)
                    {  
                        res.send({
                            status:200,
                            message:'点赞失败'
                        })
                    }
                    else{
                        res.send({
                            status:202,
                            message:'点赞成功'
                        })
                    }
                })
            }
        })
        done()
    })
})
/* 收藏推文 */
app.post('/api/collect',(req,res)=>{
    ansyclock31.acquire('mylock31',(done)=>{
        let id=req.body.id
        let tweet_id=req.body.tweet_id
        let str='insert into collected values(?,?)'
        db.query(str,[id,tweet_id],(err,results)=>{
            if(err)
            {   
                res.send({
                    status:200,
                    message:err
                })
            }
            else{
                res.send({
                    status:202,
                    message:'收藏成功'
                })
            }
        })
        done()
    })
})
/* 判断是否收藏 */
app.post('/api/iscollected', (req, res) => {

    ansyclock13.acquire('mylock13',(done)=>{
        let id=req.body.id
        let tweet_id=req.body.tweet_id
        let sqlstr = 'select * from collected where id=? and tweet_id=?'
    db.query(sqlstr,[id,tweet_id],(err, results) => {

        if (err) {
            
           return res.send({
                status: 202,
                message: '查询数据库失败'
            })
        }
        if(results.length>0)
       {res.send({
            status:200,
            message:'获取成功',
      
            
})}             
        else{
           res.send({
                  status: 202,
            })}

    })
    done()
    })
   
})
/* 将未知改为已知*/
app.post('/api/change',(req,res)=>{
    ansyclock29.acquire('mylock29',(done)=>{
        let id=req.body.id
        let to_id=req.body.to_id
       let hasread='true'
        let sqlstr='update com_reply set hasread=? where com_id=? and to_id=?'
        
        db.query(sqlstr,[hasread,id,to_id],(err,results)=>{
            
            if(err){
                res.send({
                    status:200,
                    message:'更新错误'
                })
            }
            else{
                res.send({
                    status:202,
                    message:'更新成功'
                })
            }
        })
        done()
    })
})
/* 取消收藏 */
app.post('/api/cancel_collection', (req, res) => {

    ansyclock32.acquire('mylock32',(done)=>{
        let id=req.body.id
        let tweet_id=req.body.tweet_id
    let sqlstr = 'delete  from collected where id=? and tweet_id=?'
    db.query(sqlstr,[id,tweet_id],(err, results) => {

        if (err) {
            console.log(err);
           return res.send({
                status: 202,
                message: '查询数据库失败'
            })
        }
               
        else{
           res.send({
                  status: 200,
            })}

    })
    done()
    })
   
})
/* 获取排名 */
app.post('/api/getranking', (req, res) => {

    ansyclock25.acquire('mylock25',(done)=>{
     
    let sqlstr = 'select * from user order by integral desc'
    db.query(sqlstr,(err, results) => {

        if (err) {
            
           return res.send({
                status: 202,
                message: '查询数据库失败'
            })
        }
        if(results.length>0)
       {res.send({
            status:200,
            message:'获取成功',
            data:results
            
})}             
        else{
           res.send({
                  status: 202,
            })}

    })
    done()
    })
   
})
/* 取消点赞推文 */
app.post('/api/reject_like',(req,res)=>{
    ansyclock19.acquire('mylock19',(done)=>{
        let id=req.body.id
        let studentid=req.body.studentid
        let likenum=parseInt(req.body.likenum)-1
        let integral=parseInt(req.body.integral)-2
        let sqlstr='update tweet set like_num=? where id=?'
        db.query(sqlstr,[likenum,id],(err,results)=>{
            if(err){
                res.send({
                    status:200,
                    message:'取消错误'
                })
            }
            else{
                let sqlStr='delete from tweet_like where like_id=? and like_tweet=?'
                db.query(sqlStr,[studentid,id],(err,results)=>{
                    if(err){
                      
                        res.send({
                            status:200,
                            message:'更新错误'
                        })
                    }
                    else{
                        let sqlStr='update user set integral=? where studentid=?'
                        db.query(sqlStr,[integral,studentid],(err,results)=>{
                            if(err)
                            {
                                res.send({
                                    status:200,
                                    message:'取消点赞失败'
                                })
                            }
                            else{
                                res.send({
                                    status:202,
                                    message:'取消点赞成功'
                                })
                            }
                        })
                    }
                })
            }
        })
        done()
    })
})
/* 评论推文 */
app.post('/api/comment_tweet',  (req, res) => {
    ansyclock11.acquire('mylock11',(done)=>{
        let content=encodeURIComponent(req.body.content)
        let id=req.body.id
        let studentid=req.body.studentid
        let photo=req.body.photo
        let nickname=req.body.nickname
        let time=req.body.time
        let integral=parseInt(req.body.integral)+2
       
        let sqlstr='insert into tweet_reply values (?,?,?,?,?,?,?)'
        db.query(sqlstr,[null,id,studentid,content,time,photo,nickname],(err,results)=>{
          if(err){
            console.log(err);
            res.send({
                status:200,
                message:'评论失败'
            })}
            else{
                let sqlStr='update user set integral=? where studentid=?'
                db.query(sqlStr,[integral,studentid],(err,results)=>{
                    if(err)
                    {  
                        res.send({
                            status:200,
                            message:'评论失败'
                        })
                    }
                    else{
                        res.send({
                            status:202,
                            message:'评论成功'
                        })
                    }
                })
            
          }
        })
        done()
    })

  

})
/* 获取评论 */
app.post('/api/get_comment', (req, res) => {

    ansyclock23.acquire('mylock23',(done)=>{
        let id=req.body.id
    let sqlstr = 'select * from tweet_reply where tweet_id=? order by id desc'
    db.query(sqlstr,  [id],(err, results) => {

        if (err) {
            
           return res.send({
                status: 202,
                message: '查询数据库失败'
            })
        }
        if(results.length>0)
       {
        results.forEach((item)=>{
            item.re_content=decodeURIComponent(item.re_content)
        })
        res.send({
            status:200,
            message:'获取成功',
            data:results
            
})}             
        else{
           res.send({
                  status: 202,
            })}

    })
    done()
    })
   
})
/* 获取某用户收藏的推文 */
app.post('/api/collected_tweet', (req, res) => {

    ansyclock33.acquire('mylock33',(done)=>{
        let id=req.body.id
    
    let sqlstr = 'select tweet.* from tweet,collected where tweet.id=collected.tweet_id and collected.id=? order by id desc'
    db.query(sqlstr,  [id],(err, results) => {

        if (err) {
            
           return res.send({
                status: 202,
                message: '查询数据库失败'
            })
        }
        if(results.length>0)
       {res.send({
            status:200,
            data:results
            
})}             
        else{
           res.send({
                  status: 202,
            })}

    })
    done()
    })
   
})
/* 获取用户是否点赞 */
app.post('/api/islike', (req, res) => {

    ansyclock15.acquire('mylock15',(done)=>{
        let id=req.body.id
        let studentid=req.body.studentid
    let sqlstr = 'select * from tweet_like where like_id=? and like_tweet=?'
    db.query(sqlstr,  [studentid,id],(err, results) => {

        if (err) {
            
           return res.send({
                status: 202,
                message: '查询数据库失败'
            })
        }
        if(results.length>0)
       {res.send({
            status:200,
            message:'用户点赞了'
            
})}             
        else{
           res.send({
                  status: 202,
            })}

    })
    done()
    })
   
})
/* 上传推文 */
app.post('/api/upload_tweet', (req, res) => {
    ansyclock22.acquire('mylock22',(done)=>{
    let cover=req.body.cover
    let content=req.body.content
        let title=req.body.title
        let time=req.body.time
        let sqlstr='insert into tweet values (?,?,?,?,?,?,?)'
        db.query(sqlstr,[null,title,cover,content,time,0,0],(err,results)=>{
          if(err){
            
            res.send({
                status:200,
                message:'发送失败'
            })}
            else{
                res.send({
                  status:202,
                  message:'发送成功'
                })
            
          }
        })
        contentphoto='',
        tweet_photo=''
        done()
    })

  

})
/* 检测学号与手机号是否相匹配 */
app.post('/api/test', (req, res) => {
    

    ansyclock26.acquire('mylock26',(done)=>{
       let studentid=req.body.studentid
    let phonenumber=req.body.phonenumber
    let sqlstr = 'select * from xinxi where studentid=? and phonenumber=?'
    db.query(sqlstr,[studentid,phonenumber], (err, results) => {

        if (err) {
          console.log(err);
           return res.send({
                status: 202,
                message: '查询数据库失败'
            })
        }
      else  if(results.length>0)
       {  
          
            res.send({
                status:200,
                
                
    })
        }          
        else{
       
           res.send({
                  status: 202,
            })}

    })
    done()
    })
   
})
/* 获取推文列表 */
app.post('/api/get_tweet', (req, res) => {
    let page=parseInt(req.body.page)
    let sqlstr = 'select * from tweet  order by id desc limit 4 offset ?'
    db.query(sqlstr,[page], (err, results) => {

        if (err) {
          console.log(err);
           return res.send({
                status: 202,
                message: '查询数据库失败'
            })
        }
      else  if(results.length==4)
       {  
          
            res.send({
                status:200,
                data:results
                
    })
        }          
        else{
       
           res.send({
                  status: 201,
                  data:results
            })}

    })
   
   
})
/* 登录接口 */
app.post('/api/login', (req, res) => {
    
       ansyclock2.acquire('mylock2',(done)=>{
        const openid = req.body.openid
        let sqlstr = 'select * from user where openid=?'
        db.query(sqlstr, openid, (err, results) => {

            if (err) {
                console.log(err);
               return res.send({
                    status: 202,
                    message: '查询数据库失败'
                })
            }
            if(results.length>0)
           {res.send({
                
                status:200,
                integral:results[0].integral,
                nickname:results[0].nick_name,
                avator:results[0].photo,
               phonenumber:results[0].phonenumber,
               studentid:results[0].studentid,
               Isboss:results[0].administrator
})}             
            else{
               res.send({
                      status: 202,
                })}

        })
        done()
       })
      
    
    
})
/* 查询用户是否存在 */
app.post('/api/exist', (req, res) => {

        ansyclock3.acquire('mylock3',(done)=>{
            const openid = req.body.openid
        let sqlstr = 'select * from user where studentid=?'
        db.query(sqlstr, openid, (err, results) => {

            if (err) {
                
               return res.send({
                    status: 202,
                    message: '查询数据库失败'
                })
            }
            if(results.length>0)
           {res.send({
                status:200,
                
})}             
            else{
               res.send({
                      status: 202,
                })}

        })
        done()
        })
       
})
/* 查询回复消息 */
app.post('/api/get_replymessage', (req, res) => {
ansyclock1.acquire('mylock1',(done)=>{
    
    let id=req.body.id
    let sqlstr = 'select com_reply.* from com_reply join communication on com_reply.com_id=communication.id where communication.id=?'
    db.query(sqlstr,id, (err, results) => {
        if (err) {
            
           return res.send({
                status: 202,
                message: '查询数据库失败'
            })
        }
        if(results.length>0)
       {
        results.forEach((item)=>{
            item.content=decodeURIComponent(item.content)
        })
        res.send({
            status:200,
            data:results
            
})}             
        else{
           res.send({
                  status: 202,
            })}

    })
    done()
})
   
})
/* 添加回复消息 */
app.post('/api/add_replymessage', (req, res) => {
    ansyclock21.acquire('mylock21',(done)=>{
        let id=req.body.id
      
        let content = encodeURIComponent(req.body.content)
     
    let from_id=req.body.from_id
    let to_id=req.body.to_id
    let time=req.body.time
    let sqlstr = 'insert into com_reply values (?,?,?,?,?,?,?)'
    db.query(sqlstr,[null,id,from_id,to_id,time,content,'false'], (err, results) => {
        if (err)
        {console.log(err);
        res.send({
            status: 202,
            message: '回复失败'
        })}
    else {
        res.send({
            status: 200,
            message: '回复成功',
            data: results
        })
    }

    })
    done()
    })
    
})
/* 查询发出消息者 */
app.post('/api/check_message', (req, res) => {
    ansyclock10.acquire('mylock10', (done) => {
        let content=req.body.content
        let studentid=req.body.studentid
        let sql = 'select * from communication where to_id=? and content=?'
        db.query(sql, [studentid,content],(err,results) => {
            if (err)
                res.send({
                    status: 202,
                    message: '获取失败'
                })
            else {
                res.send({
                    status: 200,
                    message: '获取成功',
                    data: results
                })
            }
        })
        done()
    })
})
/* 查询回复消息者 */
app.post('/api/check_reply', (req, res) => {
    ansyclock38.acquire('mylock38', (done) => {
        let content=encodeURIComponent(req.body.content)
        let studentid=req.body.studentid
        let sql = 'select * from com_reply where to_id=? and content=?'
        db.query(sql, [studentid,content],(err,results) => {
            if (err)
                res.send({
                    status: 202,
                    message: '获取失败'
                })
            else {
                res.send({
                    status: 200,
                    message: '获取成功',
                    data: results
                })
            }
        })
        done()
    })
})
/* 获取用户列表 */
app.post('/api/sugge', (req, res) => {
    ansyclock12.acquire('mylock12', (done) => {
        let sql = 'select * from user'
        db.query(sql, (err, results) => {
            if (err)
                res.send({
                    status: 202,
                    message: '获取失败'
                })
            else {
                res.send({
                    status: 200,
                    message: '获取成功',
                    data: results
                })
            }
        })
        done()
    })
})


/*提交建议*/
app.post('/api/takesug', (req, res) => {
    ansyclock14.acquire('mylock14', (done) => {
   
        let content = encodeURIComponent(req.body.content)
    
        let from_id = req.body.from_id
        let to_id = req.body.to_id
        let time = req.body.time
        let sql = 'insert propose (from_id,to_id,advice,advice_time) values (?,?,?,?)'
        db.query(sql, [from_id, to_id, content, time], (err, results) => {
            if (err)
                res.send({
                    status: 202,
                    message: '提交建议失败'
                })
            else {
                
                res.send({
                    status: 200,
                    message: '获取建议成功',
                    data: results
                })
            }
        })
        done()
    })
})


/* 获取建议列表 */
app.post('/api/suggestion', (req, res) => {
    ansyclock16.acquire('mylock16', (done) => {
        let id = req.body.openid
        let sql = 'select * from communication where from_id=? order by id desc'
        db.query(sql, id, (err, results) => {

            if (err)
                {console.log(err);
                    res.send({
                   
                        status: 202,
                        message: '获取建议失败'
                    })
                }
            else {
                results.forEach((item)=>{
                    item.content=decodeURIComponent(item.content)
                })
                res.send({
                    status: 200,
                    message: '获取建议成功',
                    data: results
                })
            }
        })
        done()
    })
})
/* 获取接受建议列表 */
app.post('/api/accept_suggestion', (req, res) => {
    ansyclock16.acquire('mylock16', (done) => {
        let id = req.body.openid
        let sql = 'select * from communication where to_id=? order by id desc'
        db.query(sql, id, (err, results) => {

            if (err)
                {
                    res.send({
                   
                        status: 202,
                        message: '获取建议失败'
                    })
                }
            else {
                res.send({
                    status: 200,
                    message: '获取建议成功',
                    data: results
                })
            }
        })
        done()
    })
})

/* 查看发送双方是否在拉黑表*/
app.post('/api/check', (req, res) => {
    ansyclock9.acquire('mylock9', (done) => {
        let from_id=req.body.from_id
        let to_id=req.body.to_id
        let sql = 'select * from refuse where rejecter=?&&rejevted=?'
        db.query(sql, [to_id,from_id], (err, results) => {

            if (err)
                {
                    res.send({
                   
                        status: 202,
                        message: '获取建议失败'
                    })
                }
           if(results.length>0)
           {
            res.send({
                status:200,
                message:'有'
            })
           }
           else{
            res.send({
                   
                status: 202,
                message: '不在表中'
            })
           }
        })
        done()
    })
})



/* 上传头像接口 */
app.post('/api/avator', upload.any(), (req, res) => {
  
   ansyclock4.acquire('mylock4',(done)=>{
  
    let openid = req.body.openid
   let nick_name = req.body.nick_name
    let phonenumber=req.body.phonenumber
 
    let studentid=req.body.studentid
    let insertstr = 'insert user values(?,?,?,?,?,?,?,?,?)'
    let selectstr='select * from user where studentid=?'
    db.query(selectstr,studentid,(err,results)=>{
        if(err)
        {
            res.send({
                status:201,
                message:'出错了'
            })
        }
        else if(results.length>=1)
        {
            res.send({
                status:202,
                message:'学号已经绑定'
            })
        }
        else{
            db.query(insertstr, [null,nick_name,openid,avatorurl,phonenumber,studentid,'s','0','0'], (err, results) =>{
                if (err) {
                   return res.send({
                        status: 201,
                        message: '注册失败'
                    })
                }
            if(results.affectedRows===1)
            {
                res.send({
                    status:200,
                    message:"注册成功"
                })
            }
                avatorurl = ''
            })
        }
    })
      done()
   })

})

/*  发送匿名消息*/
app.post('/api/send_message', (req, res) => {
    ansyclock5.acquire('mylock6',(done)=>{
       
   let time=req.body.time
    let from_id=req.body.from_id
   let to_id = req.body.to_id
       let content=req.body.content
    let insertstr = 'insert communication values(?,?,?,?,?)'
    db.query(insertstr, [null,from_id,to_id,time,content], (err, results) =>{
        if (err) {
            console.log(err);
           res.send({
                status: 201,
                message: '发送失败'
            })
        }
    if(results.affectedRows===1)
    {
        res.send({
            status:200,
            message:"发送成功"
        })
    }
    })
    done()
    })
   
})
/* 获取用户收到的匿名消息 */
app.post('/api/get_message', (req, res) => {
    ansyclock20.acquire('mylock20', (done) => {
       let id=req.body.from_id
        let sql = 'select * from seek wherr from_id=?'
        db.query(sql, id,(err,results) => {
            if (err)
                res.send({
                    status: 202,
                    message: '获取失败'
                })
            else {
                res.send({
                    status: 200,
                    message: '获取成功',
                    data: results
                })
            }
        })
        done()
    })
})
/* 拉黑用户 */
app.post('/api/reject', (req, res) => {
    ansyclock6.acquire('mylock6', (done) => {
       let from_id=req.body.from_id
       let to_id=req.body.to_id
        let sql = 'insert refuse values(?,?,?)'
        db.query(sql, [null,from_id,to_id],(err,results) => {
            if (err) {
               
               res.send({
                    status: 201,
                    message: '发送失败'
                })
            }
        if(results.affectedRows===1)
        {
            res.send({
                status:200,
                message:"发送成功"
            })
        }
        })
        done()
    })
})
/* 上传老师信息 */
app.post('/api/upload_teacher', (req, res) => {
       ansyclock7.acquire('mylock7',(done)=>{
        
        let name=req.body.name
      let message=req.body.message
        let work_place=req.body.work_place
        let work_time=req.body.work_time
       let reservation_phone=req.body.reservation_phone
        let level=req.body.level
        let insertstr = 'insert seek values(?,?,?,?,?,?,?,?)'
        db.query(insertstr, [null,name,teacher_avator,message,work_place,work_time,reservation_phone,level], function (err, results) {
            if (err) {
               res.send({
                    status: 201,
                    message: '上传失败'
                })
            }
            if (results.affectedRows === 1) {
                res.send({
                    status: 200,
                    message: '上传成功'
                })
            }
           
        })
       teacher_avator=''
        photourl = []
        done()
       })
    
})
/* 获取老师的列表 */
app.post('/api/get_teacher_list', (req, res) => {
       ansyclock8.acquire('mylock8',(done)=>{
        let sql = 'select * from seek'
        db.query(sql,(err, results) => {
            if (err)
            res.send({
                status: 202,
                message: '获取失败'
            })
        else {
          
            res.send({
                status: 200,
                message: '获取成功',
                data: results
            })
        }
        })
        done()
       })
})

app.listen(80, () => {
    console.log('run at http://127.0.0.1');
})
