import React from 'react'
import CardsList from '../components/CardsList'
import { DISPLAY_MAX_PAGE, useMedias } from '../contexts/MediaContexts'

export default function Bookmark() {

    const { bookmarks } = useMedias()

    return (
        <>
            <div className='movies' data-testid="bookmark">
                <CardsList display={DISPLAY_MAX_PAGE} bookmarkList />
            </div>
            { bookmarks.length === 0 &&
                <span className='bookmark__empty'>Your list is empty!</span>
            }
        </>
    )
}
