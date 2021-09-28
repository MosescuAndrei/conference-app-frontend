import RegularCard from '@bit/totalsoft_oss.react-mui.regular-card'
import React from 'react'
import PropTypes from 'prop-types'
import MyConferenceSubtile from './MyConferenceSubtitle'
import MyConferenceContent from './MyConferenceContent'


const MyConferenceItem = (props) => {
    const { conference } = props
    const { name, speakers, location } = conference
    const speaker = speakers.find(item => item.isMainSpeaker)


    return (
        <RegularCard 
            cardTitle={name} 
            cardSubtitle = {<MyConferenceSubtile 
                                speaker={speaker} 
                                location={location}
                            />} 
            content = {<MyConferenceContent 
                            conference={conference}
                        />}
         />
         )

 }
 
 MyConferenceItem.propTypes = {
    conference: PropTypes.object.isRequired
}

export default MyConferenceItem