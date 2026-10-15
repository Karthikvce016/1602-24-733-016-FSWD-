import React from 'react';

function Header(props) {
    return (
        <header className="header">
            <h1>{props.title}</h1>
        </header>
    );
}

function Sidebar() {
    return (
        <aside className="sidebar">
            <h3>Menu</h3>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </aside>
    );
}

function Content() {
    return (
        <main className="content">
            <h2>Welcome to the Portal</h2>
            <p>This layout demonstrates component composition in React.</p>
            <p>The page is constructed by composing separate components: Header, Sidebar, Content, and Footer.</p>
        </main>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2026 Student Web Portal. All rights reserved.</p>
        </footer>
    );
}

function Layout(props) {
    return (
        <div className="layout">
            <Header title={props.title} />
            <div className="main-section">
                <Sidebar />
                <Content />
            </div>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <Layout title="Student Dashboard" />
    );
}

export default App;
