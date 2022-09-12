projectData ;
const Express=require('express');
const app=Express();

const bodyparser=require('body-pareser');
app.use(bodyparser.urlencoded({
    extends:false}));
app.use(bodyparser.json());

const cors=require('cors');
app.use(cors());

app.use(Express.static('website'));

const port=8000;
const server=app.listen(port,CreatingServer);

function CreatingServer(){
    console.log('SERVER IS RUNNING');
    console.log(`THE RUNNING SERVER IS:${port}`);
};

  app.get('/getData',getData);
  function getData(req,res){res.send(projectData)};


  app.post('/setData',setData);
  function setData(req,res){
    let data = req.body;
  }









