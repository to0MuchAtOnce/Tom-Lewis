/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next';
import Container from '../components/Container';
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <Container title='About'>
      <div className='headingLg'>Hello,</div>
      <div>
        <p>
          I'm Tom, a self taught web developer living in Poland with my fiancée.
          I'm originally from the UK, and I've spent the last few years learning
          Polish, web development and generally how to become the best version
          of myself. I like to work on{' '}
          <Link className='textLink' href='./projects'>
            projects
          </Link>{' '}
          that interest me, and tools that I myself find useful.
        </p>
        <p>
          This site is a place where you can view my work and follow my learning
          journey. I have a{' '}
          <Link className='textLink' href='./'>
            blog
          </Link>{' '}
          section, where I like to cover topics that I find interesting, or
          problems i’ve had a hard time solving.
        </p>
        <p>
          The{' '}
          <Link className='textLink' href='./photo'>
            photo
          </Link>{' '}
          page displays my photography work in a collection of albums and
          personal projects that i’ve worked on over the years. Parts of this
          site are still very much a work in progress, and I’m always thinking
          of ways to make it better. If you have any suggestions you can find my
          contact details below.
        </p>

        <div className='headingMd'>What am I working on?</div>

        <p>
          <b>Polka</b> - A language learning app for teachers, focused
          specifically on the Polish language. This one is a long term project
          that myself and another developer work on in our free time, hoping one
          day it turns into something useful.
        </p>
        <p>
          <b>The Odin Project </b> - Noticing that I have many gaps in my
          knowledge, I decided to take things back to basics and brush up on the
          things I'm not sure on.{' '}
          <Link
            className='textLink'
            href='https://www.theodinproject.com/'
            target='_blank'
          >
            This
          </Link>{' '}
          open source project is fantastic place for just that, and has helped
          me grow in ways I never imagined I could.
        </p>
        <p>
          <b>This site</b> - I carry out the maintenance and implementation of
          new ideas here. This helps me grow, and serves as a reminder of how
          far I've come. I've spent numerous hours just to get it this far, and
          it's still really just a shell of what I hope it will become.
        </p>
        <p>
          I also have many side projects that I complete as apart of trying out
          new skills or from The Odin Project, you'll also find those here.
        </p>
      </div>

      <div className='headingMd'>Contact</div>

      <p>
        I'm always interested in meeting new people, so feel free to reach out.
        You can find my social media links below, or send me an email:{' '}
        <span className='email'>tom.lewis488</span> at{' '}
        <span className='email'>gmail.com</span>{' '}
      </p>
    </Container>
  );
};

export default About;
