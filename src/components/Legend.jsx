import '../assets/stylesheets/components/legend.css';

const Legend = () => {
    return (
        <div className="legend">
            <div style={{ "--color": '#67001f' }}>6000+</div>
            <div style={{ "--color": '#980043' }}>5001 - 6000</div>
            <div style={{ "--color": '#e1256' }}>1001 - 5000</div>
            <div style={{ "--color": '#e7298a' }}>501 - 1000</div>
            <div style={{ "--color": '#d4b9da'}}>100 - 500</div>
            <div style={{ "--color": '#f1eef6' }}>0-99</div>
        </div>
    );
}
export default Legend;