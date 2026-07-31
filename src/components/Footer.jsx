function Footer() {
  return (
    <footer id="contact-section">
      <div className="footer-grid">
        <div>
          <h2>
            Restaurant<span>360</span>
          </h2>
          <p>
            Empowering hospitality through digital innovation.
          </p>
        </div>
        <div>
          <h3>Solutions</h3>
          <p>POS System</p>
          <p>Inventory</p>
          <p>Analytics</p>
          <p>Kitchen Display</p>
        </div>
        <div>
          <h3>Support</h3>
          <p>Help Center</p>
          <p>Privacy Policy</p>
          <p>Terms</p>
        </div>
        <div>
          <h3>Newsletter</h3>
          <input
            type="email"
            placeholder="Email Address"
          />
          <button>Join</button>
        </div>
      </div>
      <div className="copyright">
        © 2026 Restaurant360. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;