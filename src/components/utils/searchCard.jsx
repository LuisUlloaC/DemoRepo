import React, { useState } from 'react';
import List from './listComponent';

const SearchCard =()=>{
    const [tab, setTab] = useState('party')

    const partyData = [
        {
            'name': "Dr Teamaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        {
            'name': "Mia Plays"
        },
        {
            'name': "Keoxer"
        },
        {
            'name': "Nickmerc"
        },
        {
            'name': "Abag Man"
        }
    ]

    const matchData = [
        {
            'name': "Dr Team"
        },
        {
            'name': "Mia Plays"
        },
        {
            'name': "Keoxer"
        },
        {
            'name': "Nickmerc"
        },
        {
            'name': "Abag Man"
        }
    ]

    const streamsData = [
        {
            'name': "Dr Team"
        },
        {
            'name': "Mia Plays"
        },
        {
            'name': "Keoxer"
        },
        {
            'name': "Nickmerc"
        },
        {
            'name': "Abag Man"
        }
    ]

    const handleTabChange =(name)=> {
        console.log("CHANGED TO:", name)
        setTab(name)
    }

    return(
        <div className="BigCardItemRight" style={{marginRight: "10%" , justifyContent: 'flex-start'}}>
            <div style={{display: "flex", flexDirection: "row", justifySelf: "center"}}>
                <span className="Text" style={{color: '#8a888c', fontWeight: 700}}>01.</span>
                <span className="Text">Choose Platform</span>
            </div>

            <div className='GroupCardMainLayout' style={{backgroundColor: "#18171f", 
                borderRadius: 12, justifyContent: "space-evenly", height: "fit-content"}}>
                <div className={`${tab === 'party'? 'StyledCardButton':'PlainCardButton'}`} 
                    onClick={()=> handleTabChange('party')}
                    style={tab === 'party'? {display: 'flex',height: '5vh', 
                                            flexGrow: 2, justifyContent: 'center', 
                                            fontSize: '2.5vh'}:{}}>Party</div>

                <div className={`${tab === 'matchs'? 'StyledCardButton':'PlainCardButton'}`} 
                    onClick={()=> handleTabChange('matchs')} 
                    style={tab === 'matchs'? {display: 'flex',height: '5vh',
                                            flexGrow: 2, justifyContent: 'center', fontSize: '2.5vh'}:{}}>Matchs</div>

                <div className={`${tab === 'streams'? 'StyledCardButton':'PlainCardButton'}`} 
                    onClick={()=> handleTabChange('streams')}
                    style={tab === 'streams'? {display: 'flex',height: '5vh', 
                                            flexGrow: 2, justifyContent: 'center', fontSize: '2.5vh'}:{}}>Streams</div>
            </div>

            <div style={{display: "flex", flexDirection: "row", justifySelf: "center"}}>
                <span className="Text" style={{color: '#8a888c', fontWeight: 700}}>02.</span>
                <span className="Text">Searching Game</span>
            </div>

            <div className='GroupCardMainLayout' style={{backgroundColor: "#18171f", flexDirection: "column",
                borderRadius: 12, justifyContent: "space-evenly", height: "fit-content"}}>
                    {tab === 'party'? <List data={partyData}/>: null}
                    {tab === 'matchs'? <List data={matchData}/>: null}
                    {tab === 'streams'? <List data={streamsData}/>: null}
            </div>

          
        </div>
    )
}

export default SearchCard;