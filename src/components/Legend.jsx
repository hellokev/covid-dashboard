import '../assets/stylesheets/components/legend.css';

const Legend = () => {
    return (
        <div className="legend">
            <div style={{ "--color": '#ff00ff' }}>1000000+</div>
            <div style={{ "--color": '#d400d4' }}>800001 - 1000000</div>
            <div style={{ "--color": '#b300b3' }}>600001 - 800000</div>
            <div style={{ "--color": '#990099' }}>400001 - 600000</div>
            <div style={{ "--color": '#7a007a' }}>200001 - 400000</div>
            <div style={{ "--color": '#4d004d' }}>0 - 200000</div>
        </div>
    );
}

export default Legend;
