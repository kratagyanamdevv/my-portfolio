import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-teal-500 via-purple-600 to-pink-600 text-white px-4 py-10 font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold text-white hover:text-indigo-300 transition-colors duration-300">Kratagya Namdev</h1>
          <p className="text-lg text-gray-200 mt-2">AWS DevOps Engineer | CI/CD | Kubernetes | ArgoCD | Cloud Automation</p>
          <div className="mt-4 flex justify-center gap-6 text-white hover:text-indigo-300 transition-colors duration-300">
            <a href="mailto:kratagyanamdev07860@gmail.com" aria-label="Email"><Mail className="hover:scale-110 transition-transform duration-300" /></a>
            <a href="https://www.linkedin.com/in/namdevkratagya" target="_blank" rel="noopener noreferrer"><Linkedin className="hover:scale-110 transition-transform duration-300" /></a>
            <a href="https://github.com/kratagyanamdev" target="_blank" rel="noopener noreferrer"><Github className="hover:scale-110 transition-transform duration-300" /></a>
          </div>
        </header>

        <section className="bg-gradient-to-r from-indigo-700 to-indigo-800 text-white shadow-xl rounded-2xl p-6 space-y-4 transition-all duration-300 hover:bg-indigo-600">
          <h2 className="text-2xl font-bold">Summary</h2>
          <p className="text-gray-200">Results-driven AWS DevOps Engineer with 2+ years of experience optimizing software development and deployment processes using CI/CD pipelines, containerization, and infrastructure as code.</p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-indigo-800 text-white rounded-2xl shadow p-6 transition-all duration-300 hover:bg-indigo-700">
            <h2 className="text-xl font-bold mb-2">Skills</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>CI/CD: GitHub Actions, AWS CodePipeline</li>
              <li>Cloud: AWS (EC2, EKS, Lambda, IAM, VPC)</li>
              <li>IaC: Terraform, CloudFormation</li>
              <li>Containers: Docker, Kubernetes</li>
              <li>Languages: Python, C</li>
              <li>Monitoring: Prometheus, CloudWatch</li>
            </ul>
          </div>

          <div className="bg-indigo-800 text-white rounded-2xl shadow p-6 transition-all duration-300 hover:bg-indigo-700">
            <h2 className="text-xl font-bold mb-2">Education</h2>
            <p>B.Tech in Electronics & Instrumentation - Samrat Ashok Technological Institute (2018–2022)</p>
          </div>
        </section>

        <section className="bg-gradient-to-r from-indigo-700 to-indigo-800 text-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:bg-indigo-600">
          <h2 className="text-2xl font-bold">Work Experience</h2>
          <div className="space-y-4 mt-4">
            <div>
              <h3 className="text-xl font-semibold">AWS DevOps Engineer - Imentus Technologies</h3>
              <p className="text-sm">Aug 2024 – Present</p>
              <ul className="list-disc list-inside">
                <li>Deployed Solana trading bot on AWS EKS using CI/CD pipelines.</li>
                <li>Maintained cTrader blockchain bot on DigitalOcean.</li>
                <li>Optimized AWS resources, reducing costs by 52%.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">AWS DevOps Engineer - ADAA IT Solution</h3>
              <p className="text-sm">Jan 2024 – Aug 2024</p>
              <ul className="list-disc list-inside">
                <li>Built secure payment system on AWS.</li>
                <li>Used Terraform & EKS to manage infrastructure.</li>
                <li>Integrated IAM, S3, Lambda, and RDS.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Associate DevOps Engineer - Capgemini</h3>
              <p className="text-sm">Sep 2022 – Dec 2023</p>
              <ul className="list-disc list-inside">
                <li>CI/CD pipelines for Morgan Stanley’s advisory platform.</li>
                <li>IaC using Terraform and CloudFormation.</li>
                <li>System reliability and security enhancement.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-indigo-700 to-indigo-800 text-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:bg-indigo-600">
          <h2 className="text-2xl font-bold">Projects</h2>
          <ul className="list-disc list-inside mt-4">
            <li><strong>Flask Exchange Platform:</strong> Built a crypto trading simulator using Flask, React, AWS CodePipeline, and ECS.</li>
            <li><strong>Django Movie Recommender:</strong> Developed an ML-based recommender using Django, EKS, and SageMaker.</li>
            <li><strong>BNP ETL Pipeline:</strong> ETL pipeline for financial data using AWS Glue and Redshift.</li>
          </ul>
        </section>

        <section className="bg-gradient-to-r from-indigo-700 to-indigo-800 text-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:bg-indigo-600">
          <h2 className="text-2xl font-bold">Certifications</h2>
          <ul className="list-disc list-inside">
            <li>Azure Fundamentals (AZ-900)</li>
            <li>Python for AI, Data Science & Development - Coursera</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
