# IBM Touchless Forecasting - Frontend

FP&A Touchless Forecasting - AI Native App (Digital Product) - Frontend

## 📋 Overview

IBM Touchless Forecasting is an AI-powered financial planning and analysis (FP&A) application that provides intelligent forecasting capabilities with interactive visualizations, insights, and a conversational AI chatbot interface.

## 🚀 Features

### Core Features

- **Authentication & Authorization**: Secure login system with protected routes and responsive design
- **Forecast Insights**: Comprehensive view of forecast data and analytics
- **Forecast Overview**: Detailed overview with dimension grains and tabular data
- **Forecast Review**: Interactive chart analysis with zoom controls and reset functionality
- **Revenue Baseline Analysis**:
  - Interactive charts and visualizations with centered alignment
  - AI-powered chatbot for natural language queries
  - Conversation history tracking with session management
  - Driver analysis tables
  - Advanced filtering capabilities
- **Real-time Updates**: WebSocket integration for live data updates
- **Responsive Design**: Built with IBM Carbon Design System, optimized for all screen sizes and zoom levels
- **Dark/Light Theme**: Theme switching capability

### 🆕 Enhanced Chat Interface (MVP)

#### Chat History & Session Management

- **New Chat Control**: Start fresh conversations with a single click
- **Session List**: View all previous chat sessions with timestamps and message counts
- **Session Management**: Delete old sessions, switch between conversations
- **Persistent History**: Chat sessions are preserved across page refreshes

#### Three Response Types

The chatbot now supports three distinct response types:

1. **Type 1: Plain Text (ChatGPT-style)**
   - Simple text responses for straightforward queries
   - Natural conversation flow
   - Example: "What is the forecast for Q1?"

2. **Type 2: Complex Response with Workspace**
   - Rich content displayed in a dedicated workspace panel
   - Supports embedded charts (Line, Bar, Pie)
   - Supports data tables with sorting and filtering
   - Supports images and formatted text
   - Expandable workspace (500px ↔ 70vw)
   - Tabbed interface for multiple content items
   - Example: "Show me revenue trends with breakdown by region"

3. **Type 3: Clarification Modal**
   - Interactive carousel-style modal for gathering user input
   - Three input modes:
     - **Single Selection**: Radio buttons for exclusive choices
     - **Multi-Selection**: Checkboxes for multiple options
     - **Free Text**: Text input for custom responses
   - Progress tracking with visual indicators
   - Step-by-step navigation (Previous/Next)
   - Example: "I need more details about your forecast preferences"

#### Mock Data System

- Comprehensive mock data for demonstration without backend dependency
- Intelligent response detection based on user input keywords
- Realistic data for all three response types
- Ready for backend API integration

### Chart Enhancements

- **Reset Zoom**: Button and double-click functionality to reset chart zoom
- **Centered Layout**: Charts and legends are properly centered on all pages
- **Responsive Legend**: Right-aligned for large screens, bottom-aligned for small screens
- **Download Options**: Export charts as PNG, PDF, or SVG (existing feature)
- **Full Screen Mode**: Expand charts to full screen (existing feature)

### Navigation Improvements

- **Coming Soon Features**: Scenario Analysis and Report Builder are visible but disabled with tooltips
- **Responsive Navigation**: Optimized for mobile, tablet, and desktop views

## 🛠️ Tech Stack

- **Framework**: React 19.2.4 with TypeScript 6.0.2
- **Build Tool**: Vite 8.0.4
- **UI Library**: IBM Carbon Design System (@carbon/react)
- **AI Chat**: @carbon/ai-chat for conversational interface
- **Charts**: @carbon/charts-react (Line, Bar, Pie charts)
- **State Management**: Redux Toolkit with Redux Saga
- **Routing**: React Router DOM v7
- **Styling**: SASS/SCSS with Carbon design tokens
- **HTTP Client**: Axios
- **Real-time Communication**: WebSocket

## 📦 Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager
- Backend services running on:
  - Auth Service: Port 8000
  - Chat Service: Port 8001
  - Forecast Service: Port 8002

## 🔧 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ibm-touchless-forecasting
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:
   - Copy `.env.development` for development
   - Copy `.env.production` for production
   - Update the URLs as needed

## 🏃 Running the Application

### Development Mode

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port specified by Vite)

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 🌐 Environment Variables

### Development (.env.development)

```
VITE_AUTH_BASE_URL=http://localhost:8000/api/auth
VITE_API_BASE_URL=http://localhost:8001/api
VITE_FORECAST_BASE_URL=http://localhost:8002/api/v1/forecast
VITE_ADJUSTMENTS_BASE_URL=http://localhost:8002/api/v1/forecast-adjustments
VITE_SOCKET_URL=ws://localhost:8001/ws
```

### Production (.env.production)

Update with your production service URLs

## 📁 Project Structure

```
ibm-touchless-forecasting/
├── src/
│   ├── assets/              # Images and static assets
│   ├── components/          # React components
│   │   ├── auth/           # Authentication components
│   │   ├── forecast-insights/
│   │   ├── forecast-overview/
│   │   ├── forecast-review/ # Chart analysis with zoom controls
│   │   ├── revenue-baseline/
│   │   │   ├── chatbot/    # Enhanced chat components
│   │   │   │   ├── ChatBotCarbon.tsx      # Main chat interface
│   │   │   │   ├── ChatHistory.tsx        # Session management
│   │   │   │   ├── ClarificationModal.tsx # Dynamic input modal
│   │   │   │   ├── WorkspacePanel.tsx     # Complex response viewer
│   │   │   │   └── mockChatData.ts        # Mock data system
│   │   ├── layout/         # Layout wrapper
│   │   └── modals/         # Modal components
│   ├── config/             # Configuration files
│   ├── contexts/           # React contexts
│   ├── features/           # Redux slices
│   ├── routes/             # Route configurations
│   ├── services/           # API services
│   ├── shared/             # Shared components
│   ├── store/              # Redux store setup
│   ├── styles/             # Global styles and tokens
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions
├── public/                 # Public assets
├── k8s/                    # Kubernetes deployment files
├── docs/                   # Documentation
│   ├── CHAT_COMPONENTS_API.md  # Chat components API documentation
│   ├── UI_Requirements.xlsx    # UI requirements
│   └── askfin-tff-ui-sketch-mvp.pdf  # UI sketches
├── Dockerfile              # Docker configuration
├── nginx.conf              # Nginx configuration
└── package.json            # Project dependencies
```

## 🔐 Authentication

The application uses a protected route system. Users must authenticate through the login page before accessing:

- Forecast Insights (`/forecastinsights`)
- Forecast Overview (`/forecastoverview`)
- Forecast Review (`/forecastreview`)
- Revenue Baseline (`/revenue`)

The login page is fully responsive and works at all zoom levels (50%-200%).

## 🐳 Building the Docker Image

The Dockerfile only packages pre-built static files into an nginx image — **npm and Vite run on your machine, not inside Docker**. This avoids network and native-binary issues in restricted environments.

Build pipeline: **Node setup → install deps → Vite build → Docker build → push → deploy**

> Each step below shows commands for both **bash/zsh** (Linux, macOS, WSL2) and **PowerShell** (Windows). Pick the block that matches your shell.

---

### One-time machine setup

#### 1. Install nvm (Node Version Manager)

**bash/zsh — Linux, macOS, WSL2**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.bashrc   # or open a new terminal
```

**PowerShell — Windows**

Use [nvm-windows](https://github.com/coreybutler/nvm-windows) (a separate project — not the same as the Linux nvm):

1. Go to [github.com/coreybutler/nvm-windows/releases/latest](https://github.com/coreybutler/nvm-windows/releases/latest)
2. Download `nvm-setup.exe` and run the installer
3. Close and re-open PowerShell (as Administrator if needed)

```powershell
nvm version   # verify: prints nvm-windows version
```

#### 2. Install the required Node.js version

Vite 8 requires Node.js `^20.19.0` or `>=22.12.0`. The project ships an `.nvmrc` that pins `20.19`.

**bash/zsh — Linux, macOS, WSL2**

```bash
nvm install   # reads .nvmrc — installs 20.19
nvm use       # switches to 20.19 in the current shell
node -v       # should print v20.19.x
```

> **Every terminal session**: run `nvm use` once before building, or add `nvm use` to your `~/.bashrc`/`~/.zshrc` so it activates automatically.

**PowerShell — Windows**

nvm-windows does not read `.nvmrc` automatically — specify the version explicitly:

```powershell
nvm install 20.19.0
nvm use 20.19.0
node -v          # should print v20.19.0
```

> **Every PowerShell session**: run `nvm use 20.19.0` once before building. To automate this, add the line to your PowerShell profile (`$PROFILE`).

#### 3. Install Docker

- **Linux / WSL2**: [Docker Engine](https://docs.docker.com/engine/install/ubuntu/)
- **Mac / Windows**: [Docker Desktop](https://www.docker.com/products/docker-desktop/)

Verify on both platforms:

```
docker buildx version
```

---

### First-time project setup

**bash/zsh — Linux, macOS, WSL2**

```bash
# From packages/app-fe/
rm -rf node_modules package-lock.json   # start clean — avoids rolldown optional-dep issues
npm install                             # installs all deps including platform-native rolldown binding

# Verify the native binding is present (required for vite build to succeed)
ls node_modules/@rolldown/
# Expected: binding-linux-x64-gnu  (Linux/WSL2) | binding-darwin-arm64  (Mac M-series) | binding-darwin-x64  (Mac Intel)
```

**PowerShell — Windows**

```powershell
# From packages/app-fe/
Remove-Item -Recurse -Force node_modules, package-lock.json   # start clean
npm install                                                    # installs all deps

# Verify the native binding is present
Get-ChildItem node_modules/@rolldown/
# Expected: binding-win32-x64-msvc  (Windows x64)
```

> **Important**: always use `npm install`, not `npm ci`, for the first install or after switching Node versions. `npm ci` has a known bug ([#4828](https://github.com/npm/cli/issues/4828)) where it skips optional platform-specific packages like the rolldown native binding.

---

### Building the Docker image

#### Step 1 — Build the Vite app

`VITE_*` variables are baked into the JS bundle at build time (Vite replaces them statically).
The default relative paths (`/api`, `/ws`) work for all cluster environments — the Ingress
routes those paths to the backend services. Only override them to point at a remote backend
from your local machine.

**bash/zsh — Linux, macOS, WSL2**

```bash
VITE_API_BASE_URL=/api \
VITE_AUTH_BASE_URL=/api/auth \
VITE_FORECAST_BASE_URL=/api/v1/forecast \
VITE_ADJUSTMENTS_BASE_URL=/api/v1/forecast-adjustments \
VITE_SOCKET_URL=/ws \
NODE_OPTIONS="--max-old-space-size=4096" \
npm run build:docker

# Verify output
ls dist/   # should contain index.html and assets/
```

**PowerShell — Windows**

```powershell
$env:VITE_API_BASE_URL          = "/api"
$env:VITE_AUTH_BASE_URL         = "/api/auth"
$env:VITE_FORECAST_BASE_URL     = "/api/v1/forecast"
$env:VITE_ADJUSTMENTS_BASE_URL     = "/api/v1/forecast-adjustments"
$env:VITE_SOCKET_URL            = "/ws"
$env:NODE_OPTIONS               = "--max-old-space-size=4096"
npm run build:docker

# Verify output
Get-ChildItem dist/   # should contain index.html and assets/
```

> The `$env:` assignments persist only for the current PowerShell session — they are not written to the system environment permanently.

#### Step 2 — Build and tag the Docker image

**bash/zsh — Linux, macOS, WSL2**

```bash
export TAG=$(git rev-parse --short HEAD)

docker buildx build \
  -t us.icr.io/ibm-askfin-tff-test/ft-asset-tff-dpai-fe/frontend:${TAG} \
  -t us.icr.io/ibm-askfin-tff-test/ft-asset-tff-dpai-fe/frontend:latest \
  .
```

**PowerShell — Windows**

PowerShell uses a backtick `` ` `` for line continuation (not `\`):

```powershell
$TAG = git rev-parse --short HEAD

docker buildx build `
  -t "us.icr.io/ibm-askfin-tff-test/ft-asset-tff-dpai-fe/frontend:$TAG" `
  -t "us.icr.io/ibm-askfin-tff-test/ft-asset-tff-dpai-fe/frontend:latest" `
  .
```

#### Step 3 — Test the image locally (optional)

**bash/zsh and PowerShell (same commands)**

```bash
docker buildx build -t frontend:local .
docker run -p 8080:80 frontend:local
# Open http://localhost:8080
```

---

### Pushing and deploying to IKS

#### Prerequisites

**bash/zsh and PowerShell (same commands)**

```bash
# Install IBM Cloud CLI plugins (once)
ibmcloud plugin install container-registry
ibmcloud plugin install container-service
```

#### Step 1 — Authenticate

**bash/zsh and PowerShell (same commands)**

```bash
# Log in to IBM Cloud
ibmcloud login --apikey <YOUR_IBM_CLOUD_API_KEY> -r us-south

# Log in to IBM Container Registry
ibmcloud cr login

# Connect kubectl to the IKS cluster
ibmcloud ks cluster config --cluster <CLUSTER_NAME_OR_ID>
kubectl get nodes   # verify connection
```

#### Step 2 — Push image to ICR

**bash/zsh — Linux, macOS, WSL2**

```bash
export TAG=$(git rev-parse --short HEAD)

docker push us.icr.io/ibm-askfin-tff-test/ft-asset-tff-dpai-fe/frontend:${TAG}
docker push us.icr.io/ibm-askfin-tff-test/ft-asset-tff-dpai-fe/frontend:latest
```

**PowerShell — Windows**

```powershell
$TAG = git rev-parse --short HEAD

docker push "us.icr.io/ibm-askfin-tff-test/ft-asset-tff-dpai-fe/frontend:$TAG"
docker push "us.icr.io/ibm-askfin-tff-test/ft-asset-tff-dpai-fe/frontend:latest"
```

#### Step 3 — Deploy with Helm

**bash/zsh — Linux, macOS, WSL2**

```bash
export TAG=$(git rev-parse --short HEAD)

# First deployment
helm install frontend helm/charts/frontend/ \
  --namespace dpai \
  --values helm/charts/frontend/values.yaml \
  --set image.tag=${TAG}

# Subsequent deployments (or use the one-liner below for both)
helm upgrade --install frontend helm/charts/frontend/ \
  --namespace dpai \
  --values helm/charts/frontend/values.yaml \
  --set image.tag=${TAG}
```

**PowerShell — Windows**

```powershell
$TAG = git rev-parse --short HEAD

# First deployment
helm install frontend helm/charts/frontend/ `
  --namespace dpai `
  --values helm/charts/frontend/values.yaml `
  --set "image.tag=$TAG"

# Subsequent deployments (or use the one-liner below for both)
helm upgrade --install frontend helm/charts/frontend/ `
  --namespace dpai `
  --values helm/charts/frontend/values.yaml `
  --set "image.tag=$TAG"
```

#### Step 4 — Verify the deployment

**bash/zsh and PowerShell (same commands)**

```bash
# Watch pods come up
kubectl get pods -n dpai -l app=frontend -w

# Check rollout status
kubectl rollout status deployment/frontend -n dpai

# Check ingress / app URL
kubectl get ingress -n dpai

# Stream logs
kubectl logs -n dpai -l app=frontend -f

# Inspect a pod that isn't starting
kubectl describe pod -n dpai -l app=frontend
```

#### Rollback

**bash/zsh and PowerShell (same commands)**

```bash
helm history frontend -n dpai                  # list revisions
helm rollback frontend -n dpai                 # roll back to previous
helm rollback frontend <REVISION> -n dpai      # roll back to specific revision
```

---

### Environment reference

|                | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Namespace      | `dpai`                                                        |
| ICR registry   | `us.icr.io/ibm-askfin-tff-test/ft-asset-tff-dpai-fe/frontend` |
| Helm chart     | `helm/charts/frontend/`                                       |
| Default values | `helm/charts/frontend/values.yaml`                            |
| Ingress class  | `private-iks-k8s-nginx` (VPN required)                        |

---

### Troubleshooting

| Error                                                                 | Cause                                               | Fix                                                                                                                                    |
| --------------------------------------------------------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `You are using Node.js X. Vite requires…`                             | Wrong Node version active                           | **bash**: `nvm use` · **PowerShell**: `nvm use 20.19.0`                                                                                |
| `Cannot find native binding` / `@rolldown/binding-*`                  | rolldown optional dep not installed                 | **bash**: `rm -rf node_modules && npm install` · **PowerShell**: `Remove-Item -Recurse -Force node_modules; npm install`               |
| `vite: command not found`                                             | `node_modules/.bin` not on PATH                     | Run via `npm run build:docker`, not `vite build` directly                                                                              |
| `dist/` not found during `docker buildx build`                        | Vite build not run before Docker build              | Run Step 1 (Vite build) before Step 2 (Docker build)                                                                                   |
| Docker push `unauthorized`                                            | ICR session expired                                 | `ibmcloud cr login`                                                                                                                    |
| Pod `ImagePullBackOff`                                                | Image not pushed / wrong tag                        | Verify push succeeded; check `image.tag` matches                                                                                       |
| `'nvm' is not recognized as a command`                                | nvm-windows not installed or terminal not restarted | Install from [github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows/releases/latest), then re-open PowerShell |
| `npm run build:docker` fails with OOM / JavaScript heap out of memory | Carbon bundle too large for default Node heap       | Ensure `$env:NODE_OPTIONS = "--max-old-space-size=4096"` is set before running the build                                               |

## 🎨 UI Components

The application uses IBM Carbon Design System components including:

- Data tables with sorting and filtering
- Charts (Line, Bar, Combo, Pie)
- Modal dialogs and clarification modals
- Loading indicators
- Toast notifications
- AI Chat interface with history
- Form controls and filters
- Tooltips and popovers
- Radio buttons and checkboxes
- Text inputs and text areas

All components are fully compliant with IBM Carbon Design System guidelines.

## 🔄 State Management

- **Redux Toolkit**: For global state management
- **Redux Saga**: For handling side effects
- **Redux Persist**: For state persistence
- **React Context**: For theme and forecast info management
- **Component State**: For local UI state (chat history, modals, workspace)

## 📊 Key Features by Module

### Forecast Insights

- View and analyze forecast data
- Detailed insight cards
- Interactive data exploration

### Forecast Overview

- Dimension-based data filtering
- Grain-level analysis
- Comprehensive data tables

### Forecast Review

- Historical and forecasted data visualization
- Interactive zoom controls with reset functionality
- Double-click to reset zoom
- Centered chart and legend layout
- Responsive legend positioning

### Revenue Baseline

- Historical and forecasted revenue visualization
- AI chatbot for data queries with three response types
- Chat history with session management
- Clarification modal for gathering user input
- Workspace panel for complex responses
- Driver analysis
- Multi-dimensional filtering
- Conversation history

## 💬 Chat Interface Usage

### Starting a New Chat

Click the "New Chat" button in the chat history sidebar to start a fresh conversation.

### Viewing Chat History

All previous chat sessions are listed in the sidebar with:

- Session title (first message preview)
- Timestamp
- Message count
- Delete option

### Triggering Different Response Types

**Plain Text Response:**

- Ask simple questions: "What is the forecast?"
- General queries: "Tell me about revenue"

**Complex Response with Workspace:**

- Request charts: "Show me revenue trends"
- Ask for breakdowns: "Revenue by region"
- Request analysis: "Analyze forecast accuracy"

**Clarification Modal:**

- Provide incomplete information: "I need forecast details"
- Ask open-ended questions: "Help me with forecasting"
- Request preferences: "Set up my forecast"

See `docs/CHAT_COMPONENTS_API.md` for detailed API documentation.

## 🧪 Testing

Testing utilities are available in `src/utils/testing/`

### Testing with Mock Data

The application includes comprehensive mock data for all chat response types. No backend is required for testing the chat interface.

### Recommended Test Scenarios

1. Test all three chat response types
2. Verify chat history persistence
3. Test clarification modal with all input modes
4. Verify workspace panel with charts, tables, and images
5. Test responsive behavior at different screen sizes
6. Verify zoom controls on all chart pages
7. Test navigation between pages

## 📝 Code Quality

- ESLint configuration for code linting
- TypeScript for type safety
- SCSS for maintainable styling
- IBM Carbon Design System compliance
- Modular component architecture

## 🤝 Contributing

1. Follow the existing code structure
2. Use TypeScript for all new components
3. Follow IBM Carbon Design System guidelines
4. Write meaningful commit messages
5. Test thoroughly before submitting
6. Maintain backward compatibility with existing backend integrations
7. Use mock data for features without backend support

## 📚 Documentation

- **CHAT_COMPONENTS_API.md**: Comprehensive API documentation for chat components
- **UI_Requirements.xlsx**: Detailed UI requirements and specifications
- **askfin-tff-ui-sketch-mvp.pdf**: UI mockups and design sketches

## 🔮 Future Enhancements

### Planned Features

- Backend API integration for real LLM responses
- Chat history persistence with Redux
- Filter and zoom level preservation across navigation
- Default zoom ranges based on frequency (Monthly/Quarterly/Yearly)
- W3ID SSO integration
- Enhanced dimension hierarchy selection
- Scenario Analysis module
- Report Builder module

### Known Limitations

- Chat currently uses mock data (backend integration pending)
- Scenario Analysis and Report Builder are disabled (coming soon)
- Some filter persistence features are pending implementation

## 📄 License

[Add your license information here]

## 👥 Team

IBM FP&A Digital Product Team

## 📞 Support

For issues and questions, please contact the development team or create an issue in the repository.

## 🔗 Related Services

- Auth Service: Authentication and authorization
- Chat Service: AI chatbot backend with WebSocket support
- Forecast Service: Forecasting engine and data management

---

**Note**: This is a frontend application that requires backend services to be running. Ensure all backend services are properly configured and accessible before running the application. The chat interface currently uses mock data for demonstration purposes and is ready for backend API integration.

## 🎯 Quick Start Guide

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Login with your credentials
4. Navigate to Revenue Baseline to test the enhanced chat interface
5. Try different queries to see all three response types
6. Explore chat history and session management
7. Test clarification modal with different input modes
8. View complex responses in the workspace panel

For detailed component usage, see `docs/CHAT_COMPONENTS_API.md`.
