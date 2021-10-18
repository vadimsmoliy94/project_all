import "../App.css";

function DownloadButton({ linkDownload }) {

    return (
        <button className="Download-button"><a href={linkDownload}>Download</a></button>
    );
}

export default DownloadButton;
