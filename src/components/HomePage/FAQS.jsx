import React from 'react';
import ToogleFAQ from '../ToggleFAQ/ToogleFAQ';
import Container from '@/layouts/Container';

function FAQS() {
  return (
    <section id='faqs'>
        <Container>
            <div className='md:w-[750px] w-full mx-auto '>
                <div className="mx-auto p-4">
                <ToogleFAQ
                    heading="What is SHABAAS Pay ?"
                    description="SHABAAS Pay app allows you to make QR code based payments in an easy to use and cost effective.
                    Simply scan shabaas QR at participating merchant outlets and make payment instantly."
                />
                <ToogleFAQ
                    heading="How much does SHABAAS Pay Cost to Use ?"
                    description="SHABAAS Pay is a free to use app."
                />
                <ToogleFAQ
                    heading="How can I earn using SHABAAS Pay ?"
                    description="Use SHABAAS Pay to make first 3 successful transaction and redeem $10 on your next transaction*."
                />
                </div>
            </div>
        </Container>
    </section>
  );
}

export default FAQS;
