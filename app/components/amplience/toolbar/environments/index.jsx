import {Box, Button, Heading, useMultiStyleConfig, VStack} from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import { useContext } from 'react'
import { AmplienceContext } from '../../../../contexts/amplience'
import useNavigation from '../../../../hooks/use-navigation'

const EnvironmentsPanel = ({vse}) => {
    const styles = useMultiStyleConfig('PreviewHeader')
    const navigate = useNavigation()
    const { envs } = useContext(AmplienceContext)
    const [currentHub, setCurrentHub] = useState({})

    const handleNewCurrentEnv = (e) => {
        const env = JSON.parse(decodeURIComponent(e.target.dataset.env))
        setCurrentHub(env.hub)
        navigate(`/?vse=${env.vse}&vse-timestamp=null`)
        window.location.reload()
    }
    
    useEffect(() => {
        const hub = envs.find(item => {
            const regExp = /(.*)-(.*)-(.*)(\.staging.bigcontent.io)/
            const matches = vse.match(regExp)
            if (matches) {
                const originalVse = `${matches[1]}.staging.bigcontent.io`
                return item.vse === originalVse
            } else {
                return item.vse === vse
            }
        }).hub
        setCurrentHub(hub)
    }, [])

    return (
        <Box {...styles.box}>
            <VStack spacing={4} align='flex-start'>
            {
                vse && envs.map(env => {
                    if (env.hub == currentHub) {
                        return <Heading as='h4' size='xs' fontSize='xs'>
                                <b>{env.name} ({env.hub})</b>
                            </Heading>
                    } else {
                        return <>
                            <Button 
                                fontSize='xs'
                                style={{display: 'inline', color: '#E80D8C'}}
                                variant="link" 
                                onClick={handleNewCurrentEnv} 
                                data-env={encodeURIComponent(JSON.stringify(env))}>
                                    {env.name} ({env.hub})
                            </Button>
                        </>
                    }
                })
            }
            </VStack>
        </Box>
    )
}

EnvironmentsPanel.propTypes = {
    vse: PropTypes.string,
    hubname: PropTypes.string,
    locale: PropTypes.string,
    contentId: PropTypes.string
}

export default EnvironmentsPanel;