'use client'
import React, { useEffect, useRef } from 'react'
import VimeoPlayer from '@vimeo/player'

const VimeoVideoPlayer = ({ videoId }) => {
  const playerContainerRef = useRef(null)

  useEffect(() => {
    // Remove any existing iframe from the player container
    while (playerContainerRef.current.firstChild) {
      playerContainerRef.current.removeChild(
        playerContainerRef.current.firstChild
      )
    }

    // Create a new player iframe with the updated videoId
    const player = new VimeoPlayer(playerContainerRef.current, {
      id: videoId,
      width: '100%',
      responsive: true,
    })

    return () => {
      // Clean up the player when the component unmounts
      player.destroy()
    }
  }, [videoId])

  return (
    <div
      ref={playerContainerRef}
      style={{
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    ></div>
  )
}

export default VimeoVideoPlayer
