# MVP Development Plan: Skincare App

Based on the architecture provided, here's a granular step-by-step plan to build the MVP. Each task is designed to be small, testable, and focused on a single concern.

## Phase 1: Foundation Setup

### Task 1: Initialize Monorepo Structure
- [x] Create root directory `skincare-app/`
- [x] Set up folder structure: `apps/`, `packages/`, `supabase/`, `scripts/`, `.github/`
- [x] Initialize package.json with workspace configuration
- [x] **Test:** Verify all folders exist and package.json has correct workspace paths

### Task 2: Set Up Next.js App
- [x] Create `apps/web/` directory
- [x] Initialize Next.js 14 with App Router: `npx create-next-app@latest web --typescript --tailwind --app`
- [x] Configure next.config.js for monorepo structure
- [x] **Test:** `npm run dev` starts development server successfully

### Task 3: Configure Shared Packages Structure
- [x] Create `packages/ui/`, `packages/lib/`, `packages/db/` directories
- [x] Set up basic package.json files in each package
- [x] Configure TypeScript path mapping in root tsconfig.json
- [x] **Test:** Import from `@/packages/ui` works in web app

### Task 4: Install Core Dependencies
- [x] Install Supabase client: `@supabase/supabase-js`, `@supabase/auth-helpers-nextjs`
- [x] Install Zustand: `zustand`
- [x] Install shadcn/ui dependencies: `@radix-ui/react-*`, `class-variance-authority`
- [x] **Test:** All packages install without conflicts

## Phase 2: Database & Authentication

### Task 5: Initialize Supabase Project
- [x] Create new Supabase project
- [x] Copy connection details to environment variables
- [x] Set up `supabase/` directory with config files
- [x] **Test:** Can connect to Supabase dashboard

### Task 6: Create Core Database Schema
- [x] Create migration file for `users` table (managed by Supabase Auth)
- [x] Create `quiz_answers` table with columns: `id`, `user_id`, `question_id`, `answer`, `created_at`
- [x] Run migration: `supabase db push`
- [x] **Test:** Tables exist in Supabase dashboard

### Task 7: Set Up Authentication
- [x] Create `lib/supabase/client.ts` for browser client
- [x] Create `lib/supabase/server.ts` for server component client
- [x] Configure auth middleware in `middleware.ts`
- [x] **Test:** Can create client instances without errors

### Task 8: Create Basic Auth Components
- [x] Create `components/auth/SignInForm.tsx` with email/password
- [x] Create `components/auth/SignUpForm.tsx` with email/password
- [x] Add basic form validation
- [x] **Test:** Forms render and handle input changes

## Phase 3: Basic UI Foundation

### Task 9: Set Up Tailwind & shadcn/ui
- [x] Initialize shadcn/ui: `npx shadcn-ui@latest init`
- [x] Configure `packages/ui/` with base components
- [x] Add Button, Input, Card components
- [x] **Test:** Components render with correct styling

### Task 10: Create App Layout
- [X ] Create `app/layout.tsx` with HTML structure
- [X ] Add global styles and font imports
- [ X] Create basic navigation component
- [ X] **Test:** Layout renders with proper styling

### Task 11: Create Marketing Page
- [ X] Create `app/(marketing)/page.tsx` with hero section
- [ x] Add basic copy about the skincare app
- [ x] Include sign-up CTA button
- [ x] **Test:** Marketing page displays correctly

## Phase 4: Onboarding Flow - Part 1

### Task 12: Create Onboarding Layout
- [ ] Create `app/(onboarding)/layout.tsx`
- [ ] Add progress indicator component
- [ ] Style onboarding-specific navigation
- [ ] **Test:** Onboarding layout renders with progress bar

### Task 13: Create Welcome Page
- [ ] Create `app/(onboarding)/welcome/page.tsx`
- [ ] Add welcome message and "Get Started" button
- [ ] Link to first quiz step
- [ ] **Test:** Welcome page renders and navigation works

### Task 14: Create Quiz Data Structure
- [ ] Create `lib/quiz/questions.ts` with sample questions
- [ ] Define TypeScript interfaces for Question and Answer
- [ ] Create 3-5 basic skincare questions
- [ ] **Test:** Questions can be imported and typed correctly

### Task 15: Create Quiz Step Page
- [ ] Create `app/(onboarding)/quiz/[step]/page.tsx`
- [ ] Implement dynamic routing for quiz steps
- [ ] Add basic question display
- [ ] **Test:** Individual quiz steps render with correct question

## Phase 5: Onboarding Flow - Part 2

### Task 16: Create Quiz Answer Components
- [ ] Create `components/quiz/MultipleChoice.tsx`
- [ ] Create `components/quiz/Scale.tsx` for rating questions
- [ ] Add answer selection state management
- [ ] **Test:** Answer components handle selection correctly

### Task 17: Implement Quiz State Management
- [ ] Create `stores/quizStore.ts` using Zustand
- [ ] Add actions for setting answers and navigation
- [ ] Implement progress tracking
- [ ] **Test:** Store maintains quiz state across navigation

### Task 18: Create Quiz Navigation
- [ ] Add "Next" and "Previous" buttons to quiz steps
- [ ] Implement validation before advancing
- [ ] Handle quiz completion logic
- [ ] **Test:** Navigation works and validates answers

### Task 19: Save Quiz Answers to Database
- [ ] Create API route `app/api/quiz/route.ts`
- [ ] Implement upsert logic for quiz answers
- [ ] Connect quiz completion to database save
- [ ] **Test:** Quiz answers save to `quiz_answers` table

## Phase 6: Face Capture Foundation

### Task 20: Create Selfie Capture Page
- [ ] Create `app/(onboarding)/face/page.tsx`
- [ ] Add camera permission request
- [ ] Implement basic video stream display
- [ ] **Test:** Camera activates and shows video preview

### Task 21: Implement Photo Capture
- [ ] Add canvas element for photo capture
- [ ] Implement `takePhoto()` function with canvas.toBlob()
- [ ] Add capture button and photo preview
- [ ] **Test:** Can capture and display photo

### Task 22: Set Up Supabase Storage
- [ ] Create `selfies` storage bucket in Supabase
- [ ] Configure RLS policies for user-specific access
- [ ] Set up storage helper functions
- [ ] **Test:** Storage bucket exists and policies work

### Task 23: Upload Selfie to Storage
- [ ] Create upload function in `lib/supabase/storage.ts`
- [ ] Implement selfie upload after capture
- [ ] Save selfie record to `selfies` table
- [ ] **Test:** Selfie uploads and database record created

## Phase 7: Basic Face Analysis

### Task 24: Create Face Analysis Schema
- [ ] Create `skin_metrics` table with: `user_id`, `score`, `landmarks`, `created_at`
- [ ] Add migration for face analysis data
- [ ] **Test:** Table exists and can store JSON data

### Task 25: Set Up Face Analysis Route
- [ ] Create `app/api/face/route.ts` as Edge function
- [ ] Add basic file upload handling
- [ ] Return placeholder analysis data
- [ ] **Test:** Route accepts image uploads and returns JSON

### Task 26: Create Loading Page
- [ ] Create `app/(onboarding)/loading/page.tsx`
- [ ] Add animated loading spinner
- [ ] Show "Analyzing your skin..." message
- [ ] **Test:** Loading page displays with animation

### Task 27: Connect Face Analysis Flow
- [ ] Link selfie capture to face analysis API
- [ ] Navigate to loading page after upload
- [ ] Store analysis results in database
- [ ] **Test:** Complete flow from capture to analysis storage

## Phase 8: Email & Paywall

### Task 28: Create Email Collection Page
- [ ] Create `app/(onboarding)/email/page.tsx`
- [ ] Add email input form with validation
- [ ] Save email to user profile
- [ ] **Test:** Email saves to user record

### Task 29: Set Up Polar Integration
- [ ] Install Polar SDK dependencies
- [ ] Create `lib/polar/client.ts` with API configuration
- [ ] Set up environment variables for Polar
- [ ] **Test:** Can initialize Polar client

### Task 30: Create Paywall Page
- [ ] Create `app/(onboarding)/paywall/page.tsx`
- [ ] Display subscription options
- [ ] Add "Subscribe" button (placeholder)
- [ ] **Test:** Paywall page renders with subscription options

### Task 31: Implement Basic Checkout
- [ ] Create Server Action for checkout session
- [ ] Connect paywall button to checkout creation
- [ ] Add redirect to Polar checkout
- [ ] **Test:** Checkout session creates and redirects

## Phase 9: Dashboard Foundation

### Task 32: Create Dashboard Layout
- [ ] Create `app/dashboard/layout.tsx`
- [ ] Add sidebar navigation
- [ ] Create dashboard-specific styling
- [ ] **Test:** Dashboard layout renders correctly

### Task 33: Create Dashboard Home Page
- [ ] Create `app/dashboard/page.tsx`
- [ ] Add welcome message with user name
- [ ] Display placeholder skin score
- [ ] **Test:** Dashboard shows personalized content

### Task 34: Create Subscription Status Check
- [ ] Create `subscriptions` table: `user_id`, `polar_id`, `status`
- [ ] Add subscription status query
- [ ] Implement route protection based on subscription
- [ ] **Test:** Subscription status affects dashboard access

### Task 35: Create Basic Routine Display
- [ ] Create `routines` table: `user_id`, `date`, `steps`
- [ ] Add routine display component
- [ ] Show placeholder routine data
- [ ] **Test:** Routine component renders with sample data

## Phase 10: Webhook & State Management

### Task 36: Implement Polar Webhook
- [ ] Create `app/api/polar/webhook/route.ts`
- [ ] Add webhook signature verification
- [ ] Update subscription status in database
- [ ] **Test:** Webhook receives and processes events

### Task 37: Create Session Store
- [ ] Create `stores/sessionStore.ts` with Zustand
- [ ] Sync with Supabase auth state
- [ ] Add user profile data
- [ ] **Test:** Session store updates on auth changes

### Task 38: Implement Route Protection
- [ ] Create auth middleware for protected routes
- [ ] Redirect unauthenticated users to sign-in
- [ ] Check subscription status for premium features
- [ ] **Test:** Protected routes properly redirect

### Task 39: Create Error Handling
- [ ] Add error boundaries for each major section
- [ ] Implement error logging
- [ ] Create user-friendly error messages
- [ ] **Test:** Errors display gracefully without crashing

## Phase 11: Final Integration & Testing

### Task 40: Connect All Data Flows
- [ ] Ensure quiz answers inform routine generation
- [ ] Connect face analysis to skin scoring
- [ ] Link user progress through complete flow
- [ ] **Test:** Complete user journey works end-to-end

### Task 41: Add Basic Loading States
- [ ] Implement loading spinners for all async operations
- [ ] Add skeleton screens for data loading
- [ ] Handle empty states gracefully
- [ ] **Test:** All loading states display correctly

### Task 42: Implement Basic Validation
- [ ] Add form validation throughout app
- [ ] Implement error handling for API failures
- [ ] Add user feedback for successful actions
- [ ] **Test:** Validation prevents invalid submissions

### Task 43: Create Development Scripts
- [ ] Add database seed script
- [ ] Create user account creation script
- [ ] Add test data generation
- [ ] **Test:** Scripts run without errors

### Task 44: Final MVP Integration Test
- [ ] Test complete user registration flow
- [ ] Verify onboarding saves all data correctly
- [ ] Confirm subscription flow works
- [ ] Test dashboard displays user data
- [ ] **Test:** Complete MVP user journey functions properly



## Phase 12: AI Coach Foundation

### Task 45: Create AI Coach Personality & Context
- [ ] Define coach persona in `lib/ai/coach-persona.ts`
- [ ] Create system prompts for skincare expertise
- [ ] Add user context templates (skin type, concerns, routine history)
- [ ] **Test:** Coach persona constants are properly typed and exported

### Task 46: Set Up OpenAI Integration
- [ ] Install OpenAI SDK: `npm install openai`
- [ ] Create `lib/ai/openai-client.ts` with streaming configuration
- [ ] Add environment variables for OpenAI API key
- [ ] **Test:** OpenAI client initializes and can make test requests

### Task 47: Create Chat Message Schema
- [ ] Create `chat_messages` table: `id`, `user_id`, `role`, `content`, `timestamp`
- [ ] Add `chat_sessions` table: `id`, `user_id`, `title`, `created_at`, `updated_at`
- [ ] Run database migration
- [ ] **Test:** Chat tables exist and can store messages

### Task 48: Build Basic Chat Interface
- [ ] Create `components/chat/ChatBubble.tsx` for messages
- [ ] Create `components/chat/ChatInput.tsx` for user input
- [ ] Add typing indicators and message timestamps
- [ ] **Test:** Chat components render and handle basic interaction

### Task 49: Implement Chat API Route
- [ ] Create `app/api/chat/route.ts` with streaming support
- [ ] Add user context injection (skin data, routine history)
- [ ] Implement conversation memory management
- [ ] **Test:** Chat API streams responses and maintains context

## Phase 13: Enhanced Dashboard Components

### Task 50: Create Routine Display Component
- [ ] Build `components/dashboard/TodaysRoutine.tsx`
- [ ] Add AM/PM routine sections with product cards
- [ ] Include routine completion checkboxes
- [ ] **Test:** Routine component displays 3 products max per period

### Task 51: Implement Progress Photo Comparison
- [ ] Create `components/dashboard/ProgressComparison.tsx`
- [ ] Build before/after slider with smooth transitions
- [ ] Add photo date labels and progress indicators
- [ ] **Test:** Slider smoothly transitions between progress photos

### Task 52: Build Habit Streak Counter
- [ ] Create `user_habits` table: `user_id`, `habit_type`, `streak_count`, `last_completed`
- [ ] Build `components/dashboard/StreakCounter.tsx` with gamification
- [ ] Add streak milestone celebrations
- [ ] **Test:** Streak counter updates and displays achievements

### Task 53: Create Weather Impact Indicator
- [ ] Build `components/dashboard/WeatherImpact.tsx`
- [ ] Create weather-to-skincare advice mapping
- [ ] Add environmental factor icons and tips
- [ ] **Test:** Weather component shows relevant skin advice

### Task 54: Implement Mood Tracker
- [ ] Create `mood_entries` table: `user_id`, `date`, `mood_level`, `skin_notes`
- [ ] Build `components/dashboard/MoodTracker.tsx` with emoji selector
- [ ] Add quick skin condition logging
- [ ] **Test:** Mood tracker saves entries and displays history

## Phase 14: AI Coach Chat System

### Task 55: Create Chat Session Management
- [ ] Build `hooks/useChat.ts` for session state management
- [ ] Implement chat history loading and pagination
- [ ] Add new conversation creation
- [ ] **Test:** Chat hook manages multiple conversations correctly

### Task 56: Add AI Coach Proactive Suggestions
- [ ] Create `lib/ai/proactive-suggestions.ts` for trigger conditions
- [ ] Implement routine optimization recommendations
- [ ] Add product usage reminders based on data
- [ ] **Test:** Coach generates relevant suggestions based on user data

### Task 57: Implement Contextual AI Responses
- [ ] Add user skin analysis data to chat context
- [ ] Include routine adherence history in prompts
- [ ] Integrate mood and weather data for personalized advice
- [ ] **Test:** AI responses reference user's specific skin journey

### Task 58: Create Coach Avatar & Personality
- [ ] Design coach avatar component with animations
- [ ] Add personality-driven response variations
- [ ] Implement contextual emoji and tone adjustments
- [ ] **Test:** Coach avatar displays consistently with personality

### Task 59: Build Question Templates System
- [ ] Create `lib/ai/question-templates.ts` for common inquiries
- [ ] Add quick-start buttons for routine questions
- [ ] Implement follow-up question suggestions
- [ ] **Test:** Template system generates relevant starter questions

## Phase 15: Enhanced User Journey

### Task 60: Create Onboarding Coach Introduction
- [ ] Add AI coach introduction in welcome flow
- [ ] Create interactive coach-guided quiz experience
- [ ] Implement coach explanation of face analysis
- [ ] **Test:** Coach guides user through onboarding naturally

### Task 61: Build Routine Generation with AI
- [ ] Create `lib/ai/routine-generator.ts` using quiz + face analysis
- [ ] Add coach explanation of routine recommendations
- [ ] Implement routine customization through chat
- [ ] **Test:** AI generates personalized routines with explanations

### Task 62: Implement Progress Check-ins
- [ ] Create scheduled coach check-ins after routine milestones
- [ ] Add progress photo analysis with AI insights
- [ ] Build improvement celebration system
- [ ] **Test:** Coach initiates relevant check-ins based on user progress

### Task 63: Create Goal Setting with Coach
- [ ] Build `user_goals` table: `user_id`, `goal_type`, `target_date`, `status`
- [ ] Add AI-assisted goal creation through chat
- [ ] Implement goal progress tracking and coaching
- [ ] **Test:** Users can set and track goals with AI guidance

### Task 64: Build Habit Formation Coaching
- [ ] Create habit-building conversation flows
- [ ] Add gentle reminders and motivation through coach
- [ ] Implement habit difficulty adjustment suggestions
- [ ] **Test:** Coach helps users build sustainable skincare habits

## Phase 16: Advanced AI Features

### Task 65: Implement Smart Routine Adjustments
- [ ] Create `lib/ai/routine-optimizer.ts` for data-driven changes
- [ ] Add seasonal routine adjustment suggestions
- [ ] Implement progress-based product recommendations
- [ ] **Test:** AI suggests routine changes based on user data patterns

### Task 66: Create Ingredient Education System
- [ ] Build ingredient knowledge base for AI reference
- [ ] Add interactive ingredient explanations through chat
- [ ] Implement ingredient interaction warnings
- [ ] **Test:** Coach provides accurate ingredient information

### Task 67: Build Problem-Solving Coach
- [ ] Create troubleshooting conversation flows
- [ ] Add skin issue diagnosis assistance (non-medical)
- [ ] Implement solution suggestion system
- [ ] **Test:** Coach helps users troubleshoot routine issues

### Task 68: Add Motivational Coaching
- [ ] Implement encouragement system based on user progress
- [ ] Create achievement recognition and celebration
- [ ] Add motivational quotes and tips delivery
- [ ] **Test:** Coach provides appropriate motivation based on user state

### Task 69: Create Learning Path System
- [ ] Build skincare education curriculum
- [ ] Add progressive knowledge delivery through chat
- [ ] Implement quiz-based learning reinforcement
- [ ] **Test:** Users can learn skincare concepts through AI guidance

## Phase 17: Dashboard AI Integration

### Task 70: Add AI Insights to Dashboard
- [ ] Create `components/dashboard/AIInsights.tsx` with daily tips
- [ ] Add trend analysis from user data
- [ ] Implement personalized dashboard recommendations
- [ ] **Test:** AI insights update daily based on user behavior

### Task 71: Build Smart Notifications
- [ ] Create notification system triggered by AI analysis
- [ ] Add routine reminders with personalized messaging
- [ ] Implement progress milestone notifications
- [ ] **Test:** Notifications are relevant and appropriately timed

### Task 72: Create Conversation Shortcuts
- [ ] Add quick action buttons in dashboard for common questions
- [ ] Implement "Ask Coach" floating action button
- [ ] Create contextual help throughout the app
- [ ] **Test:** Users can easily access coach from anywhere in app

### Task 73: Implement Voice Interaction (Optional)
- [ ] Add speech-to-text for chat input
- [ ] Implement text-to-speech for coach responses
- [ ] Create voice-activated routine logging
- [ ] **Test:** Voice features work reliably across devices

### Task 74: Build Routine Compliance Tracking
- [ ] Create detailed routine adherence analytics
- [ ] Add AI analysis of compliance patterns
- [ ] Implement gentle coaching for missed routines
- [ ] **Test:** Compliance tracking accurately reflects user behavior

## Phase 18: Advanced Coach Capabilities

### Task 75: Create Multi-Modal AI Responses
- [ ] Add image analysis capabilities to coach responses
- [ ] Implement progress photo feedback through chat
- [ ] Create visual routine explanations
- [ ] **Test:** Coach can analyze and respond to user-uploaded images

### Task 76: Build Predictive Coaching
- [ ] Create trend analysis for skin improvement prediction
- [ ] Add early warning system for potential issues
- [ ] Implement preventive care suggestions
- [ ] **Test:** AI makes accurate predictions based on user data

### Task 77: Implement Emotional Intelligence
- [ ] Add emotion detection from user messages
- [ ] Create empathetic response patterns
- [ ] Implement mood-based coaching adjustments
- [ ] **Test:** Coach responds appropriately to user emotional state

### Task 78: Create Social Features with AI
- [ ] Add anonymous progress sharing with AI insights
- [ ] Implement community question answering by coach
- [ ] Create group challenges facilitated by AI
- [ ] **Test:** Social features maintain privacy while providing value

### Task 79: Build Advanced Analytics Dashboard
- [ ] Create comprehensive progress analytics
- [ ] Add AI-generated insight reports
- [ ] Implement trend visualization with explanations
- [ ] **Test:** Analytics provide actionable insights for users

## Phase 19: Coach Personality & Engagement

### Task 80: Implement Dynamic Personality
- [ ] Create mood-adaptive coach responses
- [ ] Add personality evolution based on user relationship
- [ ] Implement contextual humor and encouragement
- [ ] **Test:** Coach personality feels consistent yet dynamic

### Task 81: Build Conversation Memory
- [ ] Create long-term conversation context storage
- [ ] Add reference to previous conversations in responses
- [ ] Implement relationship building through memory
- [ ] **Test:** Coach remembers and references past conversations

### Task 82: Create Gamified Coach Interactions
- [ ] Add experience points for coach conversations
- [ ] Implement achievement badges for learning milestones
- [ ] Create coach relationship levels and rewards
- [ ] **Test:** Gamification encourages continued engagement

### Task 83: Build Specialized Coach Modes
- [ ] Create focused modes (acne, anti-aging, sensitivity)
- [ ] Add expert-level responses for advanced users
- [ ] Implement beginner-friendly explanations
- [ ] **Test:** Coach adapts expertise level to user needs

### Task 84: Implement Coach Availability States
- [ ] Add "thinking" animations during response generation
- [ ] Create "busy" states with helpful alternatives
- [ ] Implement response time optimization
- [ ] **Test:** Coach feels responsive and available

## Phase 20: Final AI Integration & Polish

### Task 85: Create Comprehensive User Context
- [ ] Build complete user profile for AI context
- [ ] Add behavioral pattern analysis
- [ ] Implement preference learning system
- [ ] **Test:** AI has complete understanding of user needs

### Task 86: Build Feedback Learning System
- [ ] Add thumbs up/down for AI responses
- [ ] Implement response quality improvement
- [ ] Create user preference learning
- [ ] **Test:** AI responses improve based on user feedback

### Task 87: Implement Cross-Platform Consistency
- [ ] Ensure coach personality consistent across features
- [ ] Add conversation continuation across app sections
- [ ] Create unified AI experience
- [ ] **Test:** Coach feels like same entity throughout app

### Task 88: Create AI Performance Monitoring
- [ ] Add response time tracking
- [ ] Implement accuracy metrics for suggestions
- [ ] Create user satisfaction monitoring
- [ ] **Test:** AI performance meets quality standards

### Task 89: Build Coach Handoff System
- [ ] Create escalation to human support when needed
- [ ] Add "I don't know" graceful responses
- [ ] Implement expert consultation suggestions
- [ ] **Test:** Coach appropriately handles limitations

### Task 90: Final AI Coach Integration Test
- [ ] Test complete coach interaction across all features
- [ ] Verify personality consistency throughout app
- [ ] Confirm AI provides value in all user scenarios
- [ ] Test coach enhances rather than replaces human judgment
- [ ] **Test:** AI coach feels like an essential, helpful companion throughout the user journey
