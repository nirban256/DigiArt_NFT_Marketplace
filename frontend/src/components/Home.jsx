import React from 'react';
import Image from './Image';
import heroImage from "../images/heroImage.jpg";

const Home = () => {
    return (
        <div className='p-5'>
            <main>
                <div>
                    <h1 className='text-5xl font-semibold'>Discover digital art & collect NFTs</h1>
                    <p>
                        NFT Marketplace is the premier platform for discovering, collecting, and selling digital art & collectibles. Buy and sell art with confidence.
                    </p>
                    <button type="submit">
                        Get started
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

                <div>
                    <Image heroImage={heroImage} hero={"hero"} title={"House of Horror"} creator={"John Doe"} />
                </div>
            </main>
        </div>
    )
}

export default Home
