# Deploy Full Stack App on AWS with Load Balancing

## Objective
Deploy a React frontend and Node.js backend on AWS EC2 with an Application Load Balancer (ALB) for scalability.

## Steps
1. Launch two EC2 instances for the backend and one for the frontend.
2. SSH into backend instances and run:
   ```bash
   npm install
   npm start
