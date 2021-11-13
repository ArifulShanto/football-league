import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import Team from '../Team/Team';
import "./Home.css";

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => takeData(data))
    }, [])
    const takeData = data => {
        const teamsArray = data.teams;
        setTeams(teamsArray)
    }
    console.log(teams);

    return (
        <div>
            <Header></Header>
            <div className="team">
                <Container>
                    <Row>
                        {
                            teams.map(team => <Team key={team.idTeam} team={team}></Team>)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;