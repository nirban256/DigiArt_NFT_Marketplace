import React from 'react';
import Image from './Image';
import heroImage from "../images/heroImage.jpg";

const Home = ({ mode }) => {
    return (
        <div>
            <main className=' flex overflow-x-hidden'>
                <div>
                    <h1 className='text-6xl font-semibold'>Discover digital art & collect NFTs</h1>
                    <p>
                        NFT Marketplace is the premier platform for discovering, collecting, and selling digital art & collectibles. Buy and sell art with confidence.
                    </p>
                    <button>
                        Buy Artwork
                    </button>

                    <button>
                        Sell Artwork
                    </button>

                    <div>
                        <div>
                            <h3>40k+</h3>
                            <p>Total sales</p>
                        </div>
                        <div>
                            <h3>10k+</h3>
                            <p>Artists</p>
                        </div>
                    </div>
                </div>

                <div className=' w-1/2'>
                    <Image heroImage={heroImage} hero={"hero"} title={"House of Horror"} creator={"John Doe"} />
                </div>
            </main>

            <div>
                <h2 className='text-5xl font-semibold'>
                    Browse Collections
                </h2>
                <div className='flex overflow-x-hidden'>
                    <Image heroImage={heroImage} hero={"hero"} title={"House of Horror"} creator={"John Doe"} />
                    <Image heroImage={heroImage} hero={"hero"} title={"House of Horror"} creator={"John Doe"} />
                    <Image heroImage={heroImage} hero={"hero"} title={"House of Horror"} creator={"John Doe"} />
                </div>
            </div>
        </div>
    )
}

export default Home
