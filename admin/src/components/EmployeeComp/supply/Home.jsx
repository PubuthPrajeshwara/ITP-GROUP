import React, { Component } from 'react';
import EmployeeLists from './EmployeeLists';

class Home extends Component {
    render() {
        const containerStyle = {
            position: 'relative',
          top: -100,
          left: 10,
          width: '85.2vw',
          overflow: 'hidden', // Prevent scrolling
        };

        const contentStyle = {
            display: 'flex',
            flexGrow: 1, // Content area fills the remaining space
        };

        const globalStyles = `
            html, body {
                overflow: hidden;
                margin: 0;
                padding: 0;
            }

            .homepage-container {
                overflow: hidden;
            }
        `;

        return (
            <div className="homepage-container" style={containerStyle}>
                <style>{globalStyles}</style>
                <div className="content" style={contentStyle}>
                    <EmployeeLists />
                </div>
            </div>
        );
    }
}

export default Home;
