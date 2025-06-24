# AI SaaS Chatbot 

![Homepage](screenshots/homepage.png)

## Getting Started/Installation

### Prerequisites

Before you begin, make sure you have the following installed:
- Node.js (v18 or above)
- npm 
- MongoDB (local or cloud, like MongoDB Atlas)
- Git

#### 1. Clone the repository
```bash
git clone https://github.com/chandanboyina/Ai-Saas-Chatbot.git
```

#### 2. Go into the project directory
```bash
cd Ai-Saas-Chatbot
```

#### 3. Install backend dependencies
```bash
cd backend
npm install
```

#### 4. Install frontend dependencies
```bash
cd ../frontend
npm install
```

# .env.example
OPEN_AI_APIKEY=your openai_apikey here ./n
OPENAI_ORGANIZATION_ID=openai_organizationid here(optional)
MONGODB_URL=your mongoDB_cluster_URL here
//jwt JWT_SECRET can be any code that not be shared with anyone
JWT_SECRET=your_jwt_secret
COOKIE_SECRET=your_cookie_secret
PORT=5000 






---

#### ▶️ **5. Running the App**

```bash
# Run frontend
cd ../frontend
npm run dev

# Run backend
cd backend
npm run dev
```




