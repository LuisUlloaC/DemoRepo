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
        <div className="BigCardItemRight" >
            <div className='EnumeratedHeader'>
                <span className="Text" style={{color: '#8a888c', fontWeight: 700}}>01.</span>
                <span className="Text">Choose Platform</span>
            </div>

            <div className='TabSelectorLayout'>
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

            <div className='EnumeratedHeader'>
                <span className="Text" style={{color: '#8a888c', fontWeight: 700}}>02.</span>
                <span className="Text">Searching Game</span>
            </div>

            <div className='ListBaseLayout'>
                    {tab === 'party'? <List data={partyData}/>: null}
                    {tab === 'matchs'? <List data={matchData}/>: null}
                    {tab === 'streams'? <List data={streamsData}/>: null}
            </div>

          
        </div>
    )
}

export default SearchCard;