import '../../styles/Footer.css';

export const Footer = () => {

    const storageTime = localStorage.getItem('fetchLastTime');
    const update = (newDate) => {
        const updateTimeSeconds = Math.floor(Date.now() - newDate)/1000;
        if(updateTimeSeconds < 60) {
            return `1 minute ago`;
        } else if(updateTimeSeconds > 60 && updateTimeSeconds < 3600) {
            let minute = Math.floor(updateTimeSeconds / 60);
            return `${minute} minutes ago`;
        } else if(updateTimeSeconds > 3600 && updateTimeSeconds < 86400) {
            let hours = Math.floor(updateTimeSeconds / 60 / 60);
            if(hours === 1) {
                return '1 hour ago';
            } else {
                return `${hours} hours ago`;
            }
        } else if(updateTimeSeconds > 86400 && updateTimeSeconds < 604799) {
            let days = Math.floor(updateTimeSeconds / 60 / 60 / 24);
            if(days === 1) {
                return `1 day ago`;
            } else {
                return `${days} days ago`;
            }
        } else if(updateTimeSeconds > 604800 && updateTimeSeconds < 2629799) {
            let weeks = Math.floor(updateTimeSeconds / 60 / 60 / 24 / 7);
            if(weeks === 1) {
                return `1 week ago`;
            } else {
                return `${weeks} weeks ago`;
            }
        } else if(updateTimeSeconds > 2629800 && updateTimeSeconds < 31557599) {
            let months = Math.floor(updateTimeSeconds / 2629800);
            if(months === 1) {
                return `1 month ago`;
            } else {
                return `${months} months ago`;
            }
        } else if(updateTimeSeconds > 31557600) {
            return `over a year ago`;
        } else {
            return '';
        }
    }

    return (
        <footer>
            <span>&copy; <a href="https://www.linkedin.com/in/andjelija-stankovic/" target="_blank" rel="noopener noreferrer">Andjelija Stankovic</a> 2023</span>
            <span>Last update: {update(storageTime)}</span>
        </footer>
    );
}