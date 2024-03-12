import React, { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { IconUserSquareRounded, IconPlayerPlayFilled, IconStarFilled, IconStar, IconSend2 } from '@tabler/icons-react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';


const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

const comments = [
  { name: 'ari', word: 'ดีค่า' },
  { name: 'ari', word: 'ดีค่า' },
  { name: 'ari', word: 'ดีค่า' },
  { name: 'ari', word: 'ดีค่า' },
  { name: 'ari', word: 'ดีค่า' },
  { name: 'ari', word: 'ดีค่า' },
  { name: 'ari', word: 'ดีค่า' },
  { name: 'ari', word: 'ดีค่า' },
  { name: 'ari', word: 'ดีค่า' },
  { name: 'ari', word: 'ดีค่า' },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function handledSubmit() {
  console.log('submit')
}

export default function Overview() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div style={{ backgroundColor: '#ECF0F1', minHeight: '100vh' }}>
      {/* ----Nav----- */}
      <header className="bg-midblack">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/home">
              <img className="h-8 w-auto" src="https://cdn.discordapp.com/attachments/915609670587125760/1211220519928602704/the-flash-high-resolution-logo-transparent.png?ex=65ed6803&is=65daf303&hm=2799cb3aa0c0b01887ead34822d7c42ec006a2ef9287cd1120b1528b4c13680f&" alt="" />
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
            <a href='#' className='text-white mx-4 my-auto'>
              How to Play
            </a>
            <IconUserSquareRounded className="text-white " size={36} />
            {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a> */}
          </div>
        </nav>
      </header>
      {/* ----Nav----- */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card sx={{ minWidth: '50%', height: 300, backgroundColor: '#3498DB', borderRadius: '20px', marginTop: '50px' }}>
          <CardContent style={{ textAlign: 'center' }}>
            <div className='text-8xl font-semibold' >
              School
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
              <IconStarFilled className='text-yellow' />
              <IconStar />
              <IconStar />
              <IconStar />
              <IconStar />
            </div>
            <div className='text-2xl mt-10'>ชุดการ์ดฝึกคำศัพท์พื้นฐานภายในโรงเรียน</div>
            <Link to="/Card">
              <IconPlayerPlayFilled style={{ width: '100%', marginTop: 20 }} size={40} />
            </Link>
          </CardContent>
          {/* <CardMedia
            component="img"
            sx={{
              height: '70%',
              width: '80%',
              objectFit: 'cover',
              marginX: 'auto'
            }}
            image="https://cdn.discordapp.com/attachments/882306005772427284/1211225320233902100/Photo_on_4-6-2566_BE_at_15.32.jpg?ex=65ed6c7b&is=65daf77b&hm=4ee669d1a0bcbfa95c2994a14c69e5a03e3630ed632308e3ce2702b51740a93d&"
            alt="classroom"
          /> */}

        </Card>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ width: '45%', height: '100vh', borderRadius: '20px', marginBottom: '50px' }}>
          <CardContent style={{ textAlign: 'left' }}>
            <Typography gutterBottom variant="h6" component="div" >
              comments
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
              <Card sx={{ width: '95%', height: '80vh', borderRadius: '20px', marginBottom: '20px', backgroundColor: '#ECF0F1', overflowY: 'auto' }}>
                <CardContent style={{ textAlign: 'left' }}>
                  {comments.map((item) => (
                    <div style={{ backgroundColor: '#BDBDBD', padding: '5px', margin: '5px', borderRadius: '10px' }}>
                      <Typography component="div" >
                        {item.name}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div" style={{}} >
                        {item.word}
                      </Typography>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <div style={{ padding: '5px', margin: '5px' }}>
                <Typography component="div" >
                  Yuki
                </Typography>
                <div>
                  <TextField label="say something" variant="standard" id="fullWidth" style={{ width: '90%' }} />
                  <Button variant="contained" onClick={handledSubmit}><IconSend2 /></Button>
                </div>

              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}