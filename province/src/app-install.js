var Service = require('node-windows').Service;

const { SCRIPT } = require('./config')

// Create a new service object
var svc = new Service({
  name:'APost1',
  description: 'Schedule that post date to province.',
  script: SCRIPT
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  console.log(`the script path is ${SCRIPT}`)

  svc.start();
});

// Just in case this file is run twice.
svc.on('alreadyinstalled',function(){
  console.log('This service is already installed.');
});

// Listen for the "start" event and let us know when the
// process has actually started working.
svc.on('start',function(){
  console.log(svc.name+' started!');
});

// Install the script as a service.
svc.install();