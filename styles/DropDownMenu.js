/*import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function DropDownMenu() {
  return (
    <div className='fixed top-16 w-56 text-right navbar outline_btn '>
      <Menu as='div' className='relative inline-block text-left '>
        <div>
          <Menu.Button className='inline-flex w-full justify-center rounded-md bg-blue bg-opacity-20 px-4 py-2 text-m font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
            Browse
            <ChevronDownIcon
              className='ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='px-1 py-1 '>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href='/courses'
                    className={`${
                      active ? 'bg-violet-500 text-green' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Courses
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href='/blogs'
                    className={`${
                      active ? 'bg-violet-500 text-green' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Blogs
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className='px-1 py-1'>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href='/ContactUs'
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Contact Us
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className='px-1 py-1'>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href='/jobs'
                    className={`${
                      active ? 'bg-violet-500 text-blue' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Jobs
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

*/
'use client'
import React, { useState } from 'react'
import { Button, Menu, MenuItem, Paper, Popover } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useRouter } from 'next/navigation'

const DropDownMenu = () => {
  const [menuAnchor, setMenuAnchor] = useState(null)
  const [submenuAnchor, setSubmenuAnchor] = useState(null)
  const [subitemMenuAnchor, setSubitemMenuAnchor] = useState(null)
  const router = useRouter()

  const buttonStyle = {
    color: 'white',
    cursor: 'pointer',
    padding: '5px',
    '@media (max-width: 640px)': {
      color: 'black',
    },
  }

  const navigateToPage = (path) => {
    router.push(path)
    setMenuAnchor(null)
    setSubmenuAnchor(null)
    setSubitemMenuAnchor(null)
  }

  const openMenu = (event) => {
    setMenuAnchor(event.currentTarget)
  }

  const closeMenu = () => {
    setMenuAnchor(null)
  }

  const openSubmenu = (event) => {
    setSubmenuAnchor(event.currentTarget)
  }

  const closeSubmenu = () => {
    setSubmenuAnchor(null)
  }

  const openSubitemMenu = (event) => {
    setSubitemMenuAnchor(event.currentTarget)
  }

  const closeSubitemMenu = () => {
    setSubitemMenuAnchor(null)
  }

  return (
    <div className='outline_btn'>
      <div>
        <Button
          style={buttonStyle}
          onClick={openMenu}
          endIcon={<ExpandMoreIcon />}
          sx={{ textTransform: 'none' }}
        >
          Explore
        </Button>
      </div>
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={closeMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <MenuItem onClick={() => navigateToPage('/courses')}>Courses</MenuItem>
        <MenuItem onClick={openSubmenu}>Services</MenuItem>
        <MenuItem onClick={openSubitemMenu}>About Us</MenuItem>
      </Menu>
      <Popover
        anchorEl={submenuAnchor}
        open={Boolean(submenuAnchor)}
        onClose={closeSubmenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <Paper>
          <MenuItem onClick={() => navigateToPage('/jobs')}>Jobs</MenuItem>

          <MenuItem onClick={() => navigateToPage('/internships')}>
            Internships
          </MenuItem>

          <MenuItem
            onClick={() =>
              navigateToPage('/about-us/our-services-content/career')
            }
          >
            Career Services
          </MenuItem>
          <MenuItem onClick={() => navigateToPage('/hackathons')}>
            Hackathons
          </MenuItem>
          <MenuItem onClick={() => navigateToPage('/for-startUps')}>
            Startups Live Projects
          </MenuItem>
          <MenuItem onClick={() => navigateToPage('alumni-network/manage')}>
            Alumni Management Package
          </MenuItem>
        </Paper>
      </Popover>
      <Popover
        anchorEl={subitemMenuAnchor}
        open={Boolean(subitemMenuAnchor)}
        onClose={closeSubitemMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <Paper>
          <MenuItem onClick={() => navigateToPage('/about-us')}>
            About Us
          </MenuItem>
          <MenuItem onClick={() => navigateToPage('/ContactUs')}>
            Contact Us
          </MenuItem>
          <MenuItem onClick={() => navigateToPage('/gallery')}>
            Gallery
          </MenuItem>
          <MenuItem onClick={() => navigateToPage('/Institutes-in-touch')}>
            Institutes In Touch
          </MenuItem>
          <MenuItem onClick={() => navigateToPage('/community')}>
            GradUp Community
          </MenuItem>
        </Paper>
      </Popover>
    </div>
  )
}

export default DropDownMenu
