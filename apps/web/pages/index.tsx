import Link from "next/link";

export default function MarketingPage() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="section text-center" style={{ marginTop: 'var(--spacing-2xl)', padding: 'var(--spacing-2xl) 0' }}>
        <div className="skin-health-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ marginBottom: 'var(--spacing-xl)' }}>
            <span className="badge badge-primary" style={{ marginBottom: 'var(--spacing-md)' }}>✨ AI-Powered Skincare</span>
            <h1 style={{ fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--spacing-lg)', lineHeight: '1.1' }}>
              Transform Your Skin with 
              <span style={{ color: 'var(--primary-accent)' }}> AI-Powered Care</span>
            </h1>
            <p className="text-lg mb-xl text-secondary" style={{ fontSize: 'var(--font-size-xl)', maxWidth: '600px', margin: '0 auto' }}>
              Get personalized skincare routines, real-time analysis, and expert guidance 
              from your AI skincare coach. Start your journey to healthier, more radiant skin today.
            </p>
          </div>
          
          <div className="flex gap-md justify-center mb-xl" style={{ flexWrap: 'wrap' }}>
            <Link href="/signup" className="btn btn-primary btn-lg">
              Start Your Skin Journey →
            </Link>
            <Link href="/demo" className="btn btn-secondary btn-lg">
              Watch Demo
            </Link>
          </div>
          
          <div className="flex gap-md justify-center" style={{ flexWrap: 'wrap' }}>
            <span className="badge badge-secondary">No Credit Card Required</span>
            <span className="badge badge-secondary">14-Day Free Trial</span>
            <span className="badge badge-secondary">Cancel Anytime</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section">
        <div className="grid grid-3 mb-xl">
          <div className="card text-center" style={{ padding: 'var(--spacing-xl)' }}>
            <div className="routine-icon" style={{ margin: '0 auto var(--spacing-lg)', fontSize: 'var(--font-size-3xl)' }}>🤖</div>
            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>AI-Powered Analysis</h3>
            <p className="text-secondary">Advanced facial recognition and skin condition analysis using cutting-edge AI technology</p>
          </div>
          <div className="card text-center" style={{ padding: 'var(--spacing-xl)' }}>
            <div className="routine-icon" style={{ margin: '0 auto var(--spacing-lg)', fontSize: 'var(--font-size-3xl)' }}>📋</div>
            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Personalized Routines</h3>
            <p className="text-secondary">Custom skincare plans tailored to your unique skin type, concerns, and lifestyle</p>
          </div>
          <div className="card text-center" style={{ padding: 'var(--spacing-xl)' }}>
            <div className="routine-icon" style={{ margin: '0 auto var(--spacing-lg)', fontSize: 'var(--font-size-3xl)' }}>💬</div>
            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>24/7 AI Coach</h3>
            <p className="text-secondary">Get expert advice, motivation, and answers to your skincare questions anytime</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <h2 className="section-title text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
          Why Choose Our AI Skincare Platform?
        </h2>
        
        <div className="grid grid-2 gap-lg">
          <div className="card-neubrutalism" style={{ padding: 'var(--spacing-xl)' }}>
            <div className="flex items-center gap-md mb-md">
              <div className="routine-icon" style={{ fontSize: 'var(--font-size-xl)' }}>🎯</div>
              <h3>Personalized for You</h3>
            </div>
            <p className="text-secondary">Our AI analyzes your skin type, concerns, and goals to create a routine that's uniquely yours. No more guessing games or one-size-fits-all solutions.</p>
          </div>
          
          <div className="card-neubrutalism" style={{ padding: 'var(--spacing-xl)' }}>
            <div className="flex items-center gap-md mb-md">
              <div className="routine-icon" style={{ fontSize: 'var(--font-size-xl)' }}>📊</div>
              <h3>Track Your Progress</h3>
            </div>
            <p className="text-secondary">Monitor your skin's improvement over time with detailed analytics, progress photos, and measurable results that show your journey to better skin.</p>
          </div>
          
          <div className="card-neubrutalism" style={{ padding: 'var(--spacing-xl)' }}>
            <div className="flex items-center gap-md mb-md">
              <div className="routine-icon" style={{ fontSize: 'var(--font-size-xl)' }}>🧠</div>
              <h3>Expert Knowledge</h3>
            </div>
            <p className="text-secondary">Access dermatologist-level insights and recommendations powered by the latest skincare research and AI technology.</p>
          </div>
          
          <div className="card-neubrutalism" style={{ padding: 'var(--spacing-xl)' }}>
            <div className="flex items-center gap-md mb-md">
              <div className="routine-icon" style={{ fontSize: 'var(--font-size-xl)' }}>🔄</div>
              <h3>Adapts to Changes</h3>
            </div>
            <p className="text-secondary">Your routine evolves with your skin, lifestyle, and environmental factors. Get recommendations that adapt to seasonal changes and life events.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <h2 className="section-title text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
          Trusted by Thousands of Users
        </h2>
        
        <div className="grid grid-3 text-center">
          <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
            <div className="progress-circle" style={{ margin: '0 auto var(--spacing-lg)' }}>
              <span className="progress-text">95%</span>
            </div>
            <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>User Satisfaction</h3>
            <p className="text-sm text-secondary">Based on 10,000+ reviews</p>
          </div>
          
          <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
            <div className="chart-donut chart-acne" style={{ margin: '0 auto var(--spacing-lg)' }}></div>
            <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>30% Improvement</h3>
            <p className="text-sm text-secondary">Average skin health increase</p>
          </div>
          
          <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
            <div className="chart-donut chart-moisture" style={{ margin: '0 auto var(--spacing-lg)' }}></div>
            <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>80% Success Rate</h3>
            <p className="text-sm text-secondary">Users achieve their goals</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section">
        <h2 className="section-title text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
          How It Works
        </h2>
        
        <div className="grid grid-3 gap-lg">
          <div className="card text-center" style={{ padding: 'var(--spacing-xl)' }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              background: 'var(--primary-accent)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto var(--spacing-lg)',
              color: 'white',
              fontSize: 'var(--font-size-xl)',
              fontWeight: 'bold'
            }}>
              1
            </div>
            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Upload Your Photo</h3>
            <p className="text-secondary">Take a selfie or upload a photo of your skin. Our AI will analyze your skin condition in seconds.</p>
          </div>
          
          <div className="card text-center" style={{ padding: 'var(--spacing-xl)' }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              background: 'var(--primary-accent)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto var(--spacing-lg)',
              color: 'white',
              fontSize: 'var(--font-size-xl)',
              fontWeight: 'bold'
            }}>
              2
            </div>
            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Get Your Analysis</h3>
            <p className="text-secondary">Receive detailed insights about your skin health, concerns, and personalized recommendations.</p>
          </div>
          
          <div className="card text-center" style={{ padding: 'var(--spacing-xl)' }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              background: 'var(--primary-accent)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto var(--spacing-lg)',
              color: 'white',
              fontSize: 'var(--font-size-xl)',
              fontWeight: 'bold'
            }}>
              3
            </div>
            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Follow Your Routine</h3>
            <p className="text-secondary">Get your personalized skincare routine and track your progress with regular check-ins.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section text-center" style={{ padding: 'var(--spacing-2xl) 0' }}>
        <div className="skin-health-card" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Ready to Transform Your Skin?</h2>
          <p className="text-lg mb-xl text-secondary">
            Join thousands of users who have already discovered the power of AI-driven skincare.
            Start your journey today and see the difference in just 14 days.
          </p>
          
          <div className="flex gap-md justify-center mb-lg" style={{ flexWrap: 'wrap' }}>
            <Link href="/signup" className="btn btn-primary btn-lg">
              Get Started Free →
            </Link>
            <Link href="/demo" className="btn btn-secondary btn-lg">
              See How It Works
            </Link>
          </div>
          
          <div className="flex gap-md justify-center" style={{ flexWrap: 'wrap' }}>
            <span className="badge badge-primary">No Credit Card</span>
            <span className="badge badge-secondary">14-Day Trial</span>
            <span className="badge badge-secondary">Cancel Anytime</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center" style={{ 
        marginTop: 'var(--spacing-2xl)', 
        padding: 'var(--spacing-xl)', 
        borderTop: '1px solid var(--border-light)',
        background: 'var(--card-bg)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-sm)'
      }}>
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