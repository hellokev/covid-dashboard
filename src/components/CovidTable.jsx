import nationalData from '../data/national-history.json';

function CovidTable() {
    return (
        <>
            <h2>Covid-19 Table</h2>
                {nationalData.map((data, index) => (
                    <ul key={index}>
                        <li>
                            <p>Deaths: {data.death}</p>
                        </li>
                    </ul>
                ))}
        </>
    );
}

export default CovidTable;