import React from 'react'
import '../assets/css/guidelines.css'
import NavBar from './Navbar'
import Footer from './Footer'


function Guidelines() {
    return (
        <>
            <NavBar />
            <h1 className="header mb-3" style={{ marginTop: '90px' }}>Covid Guidelines</h1>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h5 className='guidelines_heading mt-5'>What to do to keep yourself and others safe from COVID-19 ?</h5>
                <p className='guidelines_text'>
                    Maintain at least a 1-metre distance between yourself and others to reduce your risk of infection when they cough, sneeze or speak.
                    Make wearing a mask a normal part of being around other people. The appropriate use, storage and cleaning or disposal are essential to make masks as effective as possible.
                    </p>

                <h5 className='guidelines_heading mt-5'>How to make your environment safer ?</h5>
                <p className='guidelines_text'>Avoid the 3Cs: spaces that are closed, crowded or involve close contact.                </p>
                <p className='guidelines_text'>Meet people outside. Outdoor gatherings are safer than indoor ones, particularly if indoor spaces are small and without outdoor air coming in</p>
                <p className='guidelines_text'>Avoid crowded or indoor settings but if you can’t, then take precautions.</p>
                <p className='guidelines_text'>Open a window. Increase the amount of ‘natural ventilation’ when indoors.</p>


                <h5 className='guidelines_heading mt-5'>Don’t forget the basics of good hygiene</h5>
                <p className='guidelines_text'>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.</p>
                <p className='guidelines_text'>Avoid touching your eyes, nose and mouth. Hands touch many surfaces and can pick up viruses.</p>
                <p className='guidelines_text'>
                    Cover your mouth and nose with your bent elbow or tissue when you cough or sneeze.</p>
                <p className='guidelines_text'>Clean and disinfect surfaces frequently especially those which are regularly touched, such as door handles, faucets and phone screens.</p>

                <h5 className='guidelines_heading mt-5'>What to do if you feel unwell?</h5>
                <p className='guidelines_text'>
                    Know the full range of symptoms of COVID-19. The most common symptoms of COVID-19 are fever, dry cough, and tiredness.</p>
                <p className='guidelines_text'>Stay home and self-isolate even if you have minor symptoms such as cough, headache, mild fever, until you recover.</p>
                <p className='guidelines_text'>Call your health care provider or hotline for advice. Have someone bring you supplies.</p>
                <p className='guidelines_text'>If you have a fever, cough and difficulty breathing, seek medical attention immediately.</p>
                <p className='guidelines_text mb-4'>Keep up to date on the latest information from trusted sources, such as WHO or your local and national health authorities.</p>
            </div>
            <Footer />
        </>
    )
}

export default Guidelines
