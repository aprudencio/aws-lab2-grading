// K6 test to check the web application deployed on AWS Lab 2
import http from 'k6/http';
import { check, sleep } from 'k6';

// set options to define the load test parameters to increase the number of virtual users and duration in stages

export const options = {
    stages: [
        { duration: '1m', target: 1500 }, // ramp up to 10 users over 1 minute    
        //  { duration: '1m', target: 500 }, // ramp up to 10 users over 1 minute   
        //  { duration: '1m', target: 1000 }, // ramp up to 10 users over 1 minute   
        //   { duration: '1m', target: 1500 }, // ramp up to 10 users over 1 minute   
           { duration: '4m', target: 3000
            
            }, // ramp up to 10 users over 1 minute   
    ]}   

export default function () {
    let res = http.get('http://lab2loadbalancer-2028443857.us-east-1.elb.amazonaws.com/');
    check(res, {
        'is status 200': (r) => r.status === 200,   
        'body contains Hello from the app!!': (r) =>r.body && r.body.includes('Hello from the app!!'),
    });
    sleep(1);
}

