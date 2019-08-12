// A simple koa server
const app = new (require('koa'))();
const router = new (require('koa-router'))();
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');
const People = require('./People')

app.use(bodyParser());
app.use(cors());
app.use(require('koa-static')('client/build'));

const name = ['John', 'Bert', 'Sally', 'Jim', 'Dong', 'Fauzia', 'Paul', 'Farah', 'Javed']

const randName = () => name[Math.floor(Math.random() * name.length)];
// routes
router.get('/user', ctx => ctx.body = { name: randName(), age: 21} )
router.get('/*', (ctx) => ctx.body = '404: The default response')

router.post('/user', async ctx => {
    const user = ctx.request.body;

    // write using mongoose    
    const res = await People.writePerson(user);
    ctx.body = res;
})

app.use(router.routes())
app.listen(3000, ()=> console.log('Server started'))

console.log(process.env.npm_package_config_APP_PORT);

