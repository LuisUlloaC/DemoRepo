import React, { useState } from 'react';
import List from './listComponent';

const SearchCard =()=>{
    const [tab, setTab] = useState('party')

    const partyData = [
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
        },
        {
            'name': "AMohamedbag Man"
        },
        {
            'name': "Test Man"
        },
        {
            'name': "Bug Man"
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
        <div className="BigCardItemRight" style={{display: 'flex', marginRight: "2%" , width: '50%', justifyContent: 'flex-start'}}>
            <div style={{display: "flex", flexDirection: "row", justifySelf: "center"}}>
                <span className="Text" style={{color: '#8a888c', fontWeight: 700}}>01.</span>
                <span className="Text">Choose Platform</span>
            </div>

            <div className='GroupCardMainLayout' style={{backgroundColor: "#18171f", 
                borderRadius: 12, justifyContent: "space-evenly", height: "fit-content"}}>
                <div className={`${tab === 'party'? 'SelectedTabOnSearchCard':'PlainCardButton'}`} 
                    onClick={()=> handleTabChange('party')}
                    >Party</div>

                <div className={`${tab === 'matchs'? 'SelectedTabOnSearchCard':'PlainCardButton'}`} 
                    onClick={()=> handleTabChange('matchs')} 
                    >Matchs</div>

                <div className={`${tab === 'streams'? 'SelectedTabOnSearchCard':'PlainCardButton'}`} 
                    onClick={()=> handleTabChange('streams')}
                    >Streams</div>
            </div>

            <div style={{display: "flex", flexDirection: "row", justifySelf: "center"}}>
                <span className="Text" style={{color: '#8a888c', fontWeight: 700}}>02.</span>
                <span className="Text">Searching Game</span>
            </div>

            <div className='GroupCardMainLayout' style={{backgroundColor: "#18171f", flexDirection: "column",
                borderRadius: 12, justifyContent: "space-evenly"}}>
                    {tab === 'party'? <List data={partyData}/>: null}
                    {tab === 'matchs'? <List data={matchData}/>: null}
                    {tab === 'streams'? <List data={streamsData}/>: null}
            </div>

          
        </div>
    )
}

export default SearchCard;