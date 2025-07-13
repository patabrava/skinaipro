import Link from "next/link";

export default function MarketingPage() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="section text-center" style={{ marginTop: 'var(--spacing-2xl)' }}>
        <div className="skin-health-card">
          <h1 className="mb-lg">Transform Your Skin with AI-Powered Care</h1>
          <p className="text-lg mb-xl text-secondary">
            Get personalized skincare routines, real-time analysis, and expert guidance 
            from your AI skincare coach. Start your journey to healthier, more radiant skin today.
          </p>
          
          <div className="grid grid-3 mb-xl">
            <div className="card text-center">
              <div className="routine-icon" style={{ margin: '0 auto var(--spacing-md)' }}>🤖</div>
              <h4>AI-Powered Analysis</h4>
              <p className="text-sm text-secondary">Advanced facial recognition and skin condition analysis</p>
            </div>
            <div className="card text-center">
              <div className="routine-icon" style={{ margin: '0 auto var(--spacing-md)' }}>📋</div>
              <h4>Personalized Routines</h4>
              <p className="text-sm text-secondary">Custom skincare plans tailored to your unique needs</p>
            </div>
            <div className="card text-center">
              <div className="routine-icon" style={{ margin: '0 auto var(--spacing-md)' }}>💬</div>
              <h4>24/7 AI Coach</h4>
              <p className="text-sm text-secondary">Get expert advice and motivation whenever you need it</p>
            </div>
          </div>
          
          <Link href="/signup" className="btn btn-primary btn-lg">
            Start Your Skin Journey →
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <h2 className="section-title text-center">Why Choose Our AI Skincare Platform?</h2>
        
        <div className="grid grid-2 gap-md">
          <div className="card-neubrutalism">
            <h3>🎯 Personalized for You</h3>
            <p className="text-secondary">Our AI analyzes your skin type, concerns, and goals to create a routine that's uniquely yours. No more guessing games or one-size-fits-all solutions.</p>
          </div>
          
          <div className="card-neubrutalism">
            <h3>📊 Track Your Progress</h3>
            <p className="text-secondary">Monitor your skin's improvement over time with detailed analytics, progress photos, and measurable results that show your journey to better skin.</p>
          </div>
          
          <div className="card-neubrutalism">
            <h3>🧠 Expert Knowledge</h3>
            <p className="text-secondary">Access dermatologist-level insights and recommendations powered by the latest skincare research and AI technology.</p>
          </div>
          
          <div className="card-neubrutalism">
            <h3>🔄 Adapts to Changes</h3>
            <p className="text-secondary">Your routine evolves with your skin, lifestyle, and environmental factors. Get recommendations that adapt to seasonal changes and life events.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="grid grid-3 text-center">
          <div className="card">
            <div className="progress-circle" style={{ margin: '0 auto var(--spacing-md)' }}>
              <span className="progress-text">95%</span>
            </div>
            <h4>User Satisfaction</h4>
            <p className="text-sm text-secondary">Based on 10,000+ reviews</p>
          </div>
          
          <div className="card">
            <div className="chart-donut chart-acne" style={{ margin: '0 auto var(--spacing-md)' }}></div>
            <h4>30% Improvement</h4>
            <p className="text-sm text-secondary">Average skin health increase</p>
          </div>
          
          <div className="card">
            <div className="chart-donut chart-moisture" style={{ margin: '0 auto var(--spacing-md)' }}></div>
            <h4>80% Success Rate</h4>
            <p className="text-sm text-secondary">Users achieve their goals</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section text-center">
        <div className="skin-health-card">
          <h2>Ready to Transform Your Skin?</h2>
          <p className="text-lg mb-lg text-secondary">
            Join thousands of users who have already discovered the power of AI-driven skincare.
          </p>
          
          <div className="flex gap-md justify-center mb-lg">
            <Link href="/signup" className="btn btn-primary btn-lg">
              Get Started Free →
            </Link>
            <Link href="/demo" className="btn btn-secondary btn-lg">
              See How It Works
            </Link>
          </div>
          
          <div className="flex gap-md justify-center">
            <span className="badge badge-primary">No Credit Card</span>
            <span className="badge badge-secondary">14-Day Trial</span>
            <span className="badge badge-secondary">Cancel Anytime</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center" style={{ marginTop: 'var(--spacing-2xl)', padding: 'var(--spacing-xl)', borderTop: '1px solid var(--border-light)' }}>
        <p className="text-sm text-secondary">
          © 2024 SkinAI Pro. All rights reserved.
        </p>
        <p className="text-xs text-tertiary" style={{ marginTop: 'var(--spacing-sm)' }}>
          Built with AI for better skin health
        </p>
      </footer>
    </div>
  );
} 