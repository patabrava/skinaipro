export default function TestPage() {
  return (
    <div className="container">
      <h1 className="text-center mb-xl">UI Component Test Page</h1>
      <p className="text-center text-lg text-secondary mb-xl">
        This page tests if CSS and components are working correctly with our modern minimalist design system.
      </p>
      
      {/* Cards Test */}
      <section className="section">
        <h2 className="section-title">Card Components</h2>
        <div className="grid grid-2 gap-lg">
          <div className="card">
            <h3>Regular Card</h3>
            <p>If you can see this card with proper styling, CSS is working.</p>
            <button className="btn btn-primary">Test Button</button>
          </div>
          
          <div className="card-neubrutalism">
            <h3>Neubrutalism Card</h3>
            <p>If you can see this card with bold border and shadow, neubrutalism styles are working.</p>
            <button className="btn btn-neubrutalism">Neubrutalism Button</button>
          </div>
        </div>
      </section>

      {/* Buttons Test */}
      <section className="section">
        <h2 className="section-title">Button Components</h2>
        <div className="flex gap-md mb-lg" style={{ flexWrap: 'wrap' }}>
          <button className="btn btn-primary">Primary Button</button>
          <button className="btn btn-secondary">Secondary Button</button>
          <button className="btn btn-ghost">Ghost Button</button>
          <button className="btn btn-neubrutalism">Neubrutalism</button>
        </div>
        <div className="flex gap-md" style={{ flexWrap: 'wrap' }}>
          <button className="btn btn-primary btn-sm">Small</button>
          <button className="btn btn-primary">Medium</button>
          <button className="btn btn-primary btn-lg">Large</button>
        </div>
      </section>

      {/* Progress Elements Test */}
      <section className="section">
        <h2 className="section-title">Progress Elements</h2>
        <div className="grid grid-3 text-center">
          <div className="card">
            <div className="progress-circle" style={{ margin: '0 auto var(--spacing-lg)' }}>
              <span className="progress-text">75%</span>
            </div>
            <h4>Progress Circle</h4>
            <p className="text-sm text-secondary">Circular progress indicator</p>
          </div>
          
          <div className="card">
            <div className="chart-donut chart-acne" style={{ margin: '0 auto var(--spacing-lg)' }}></div>
            <h4>Donut Chart</h4>
            <p className="text-sm text-secondary">Acne analysis chart</p>
          </div>
          
          <div className="card">
            <div className="chart-donut chart-moisture" style={{ margin: '0 auto var(--spacing-lg)' }}></div>
            <h4>Moisture Chart</h4>
            <p className="text-sm text-secondary">Moisture level chart</p>
          </div>
        </div>
      </section>

      {/* Badges Test */}
      <section className="section">
        <h2 className="section-title">Badge Components</h2>
        <div className="flex gap-md" style={{ flexWrap: 'wrap' }}>
          <span className="badge badge-primary">Primary Badge</span>
          <span className="badge badge-secondary">Secondary Badge</span>
          <span className="badge badge-primary">New</span>
          <span className="badge badge-secondary">Completed</span>
        </div>
      </section>

      {/* Form Elements Test */}
      <section className="section">
        <h2 className="section-title">Form Elements</h2>
        <div className="grid grid-2 gap-lg">
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-input" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" className="form-input" placeholder="Enter your password" />
          </div>
          <div className="form-group">
            <label className="form-label">Error State</label>
            <input type="text" className="form-input error" placeholder="This field has an error" />
          </div>
          <div className="form-group">
            <label className="form-label">Success State</label>
            <input type="text" className="form-input success" placeholder="This field is valid" />
          </div>
        </div>
      </section>

      {/* Alerts Test */}
      <section className="section">
        <h2 className="section-title">Alert Components</h2>
        <div className="space-y-md">
          <div className="alert alert-success">
            <strong>Success!</strong> Your skin analysis has been completed successfully.
          </div>
          <div className="alert alert-warning">
            <strong>Warning!</strong> Your skin moisture levels are below optimal range.
          </div>
          <div className="alert alert-error">
            <strong>Error!</strong> Unable to process your skin scan. Please try again.
          </div>
        </div>
      </section>

      {/* Navigation Test */}
      <section className="section">
        <h2 className="section-title">Navigation Components</h2>
        <div className="nav-tab">
          <a href="#" className="nav-tab-item active">🏠 Home</a>
          <a href="#" className="nav-tab-item">📊 Analytics</a>
          <a href="#" className="nav-tab-item">📋 Plan</a>
        </div>
      </section>

      {/* Example App Components */}
      <section className="section">
        <h2 className="section-title">Example App Components</h2>
        <div className="grid grid-2 gap-lg">
          <div className="skin-health-card">
            <h3>Your Skin Health</h3>
            <div className="progress-circle" style={{ margin: 'var(--spacing-lg) auto' }}>
              <span className="progress-text">75%</span>
            </div>
            <p className="text-sm text-tertiary">Last scan 4 days ago</p>
            <button className="btn btn-primary" style={{ marginTop: 'var(--spacing-md)' }}>
              View Recommendation →
            </button>
          </div>
          
          <div className="routine-card">
            <div className="routine-icon">📅</div>
            <div style={{ flex: 1 }}>
              <h4>Daily Routine</h4>
              <p className="text-sm text-secondary">Your personalized skincare routine</p>
            </div>
            <button className="btn btn-ghost">Read more →</button>
          </div>
        </div>
      </section>
    </div>
  );
} 