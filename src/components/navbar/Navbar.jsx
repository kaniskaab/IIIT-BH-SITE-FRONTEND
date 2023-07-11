import { FaAngleDown, FaAngleRight, FaBars, FaTimes } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import logoSvg from '../../svg/iiitbbsrDark.svg';
import classes from './Navigation.module.css';
import classesM from './NavigationM.module.css';

import { useEffect, useState } from 'react';

const menuData = [
  {
    name: 'Home',
    submenu: true,
    link: '/',
    sublinks: [{ name: 'Contact Us', submenu: false, link: '/' }],
  },
  {
    name: 'University',
    submenu: true,
    link: '',
    sublinks: [
      { name: 'About', submenu: false, link: '/about' },
      {
        name: 'Information',
        submenu: true,
        link: '/',
        sublinks: [
          { name: 'IIIT Act', submenu: false, link: '/' },
          { name: 'IIIT Statute', submenu: false, link: '/' },
          { name: 'BOG', submenu: false, link: '/' },
          { name: 'NIRF', submenu: false, link: '/' },
          { name: 'RTI', submenu: false, link: '/' },
          { name: 'AICTE', submenu: false, link: '/' },
          {
            name: 'heya',
            submenu: true,
            link: '/',
            sublinks: [
              { name: 'its sample', submenu: false, link: '/' },
              { name: 'its sample again', submenu: false, link: '/' },
            ],
          },
        ],
      },
      { name: 'Administration', submenu: false, link: '/' },
      { name: 'Faculty', submenu: false, link: '/' },
      { name: 'Events', submenu: false, link: '/' },
      { name: 'Tenders', submenu: false, link: '/' },
      {
        name: 'Resources',
        submenu: true,
        link: '/',
        sublinks: [
          { name: 'Library', submenu: false, link: '/' },
          { name: 'Online Grievance Redressal', submenu: false, link: '/' },
          { name: 'Feedback facility', submenu: false, link: '/' },
          { name: 'SC/ST/OBC Cell', submenu: false, link: '/' },
        ],
      },
    ],
  },
  {
    name: 'Academics',
    submenu: true,
    link: '',
    sublinks: [
      { name: 'Regulation', submenu: false, link: '/' },
      { name: 'Cirriculum', submenu: false, link: '/' },
      {
        name: 'Research',
        submenu: true,
        link: '/',
        sublinks: [{ name: 'Research Scholars' }],
      },
    ],
  },
  {
    name: 'Departments',
    submenu: true,
    link: '',
    sublinks: [
      { name: 'CS', submenu: false, link: '/' },
      { name: 'ETC', submenu: false, link: '/' },
      { name: 'EEE', submenu: false, link: '/' },
      { name: 'Basic Sciences', submenu: false, link: '/' },
      { name: 'Humanities', submenu: false, link: '/' },
    ],
  },
  { name: 'Admission', submenu: false, link: '' },
  { name: 'Placement', submenu: false, link: '' },
  {
    name: 'More',
    submenu: true,
    link: '',
    sublinks: [
      { name: 'Carrier', submenu: false, link: '/' },
      { name: 'Alumini', submenu: false, link: '/' },
      { name: 'Intranet', submenu: false, link: '/' },
      { name: 'Students', submenu: false, link: '/' },
    ],
  },
];

export default function Navbar(props) {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openItem, setOpenItem] = useState('');
  const [openSubItem, setOpenSubItem] = useState('');
  const [openSub2Items, setOpenSub2Items] = useState('');

  const mobile = useMediaQuery({ query: '(max-width: 1000px)' });
  const isCommon = props.common || false;

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > window.innerHeight * 0.7) setHeaderScrolled(true);
    else if (headerScrolled) setHeaderScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const totalHt = (item) => {
    let count = 0;
    for (let d of menuData) {
      if (d.name === item.name && d.submenu) {
        count += d.sublinks.length;
        console.log(d);
        for (let dd of d.sublinks) {
          if (openSubItem === dd.name && dd.submenu)
            count += dd.sublinks.length;
          // for (let ddd of dd.sublinks) {
          //     if (openSubItem === ddd.name && ddd.submenu)
          //       count += ddd.sublinks.length;
          //   }
        }
      }
    }
    return count;
  };

  if (mobile)
    return (
      <>
        <nav className={classesM.navMobile}>
          <div
            className={classesM.scrolledBg}
            style={{
              height:
                headerScrolled || isCommon || menuOpen
                  ? 'calc(min(9.6vw, 3.5rem) + 2.2rem)'
                  : '0',
              opacity: headerScrolled || isCommon || menuOpen ? 1 : 0,
            }}
          />
          <div className={classesM.navBody}>
            <img
              src={logoSvg}
              alt="IIIT-Bh Logo"
              className={classesM.iiitLogo}
            />
            <div className={classesM.menuIconWrap}>
              <FaBars
                onClick={() => setMenuOpen(!menuOpen)}
                className={classesM.menuIcon}
                style={{
                  opacity: menuOpen ? 0 : 1,
                  rotate: menuOpen ? '90deg' : '0deg',
                }}
              />
              <FaTimes
                className={classesM.menuIcon}
                style={{
                  opacity: menuOpen ? 1 : 0,
                  rotate: menuOpen ? '90deg' : '0deg',
                }}
              />
            </div>
          </div>
        </nav>
        <div
          className={classesM.menuBody}
          style={{
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateX(0)' : 'translateX(500px)',
          }}
        >
          {menuData.map((item) => (
            <>
              <div open={openItem === item.name} className={classesM.item}>
                <a href={item.link}>{item.name}</a>
                {item.submenu ? (
                  <FaAngleDown
                    style={{
                      rotate: openItem === item.name ? '180deg' : '0deg',
                      transform:
                        openItem === item.name
                          ? 'translateY(-0.2rem)'
                          : 'translateY(0.2rem)',
                    }}
                    onClick={() => {
                      if (openItem === item.name) setOpenItem('');
                      else setOpenItem(item.name);
                      totalHt(item);
                    }}
                    className={classesM.downIcon}
                  />
                ) : null}
              </div>
              {item.submenu ? (
                <div
                  className={classesM.subItems}
                  style={{
                    maxHeight:
                      openItem === item.name ? `${totalHt(item) * 4}rem` : 0,
                    overflow: 'hidden',
                  }}
                >
                  {item.sublinks.map((subitem) => (
                    <>
                      <div className={classesM.item + ' ' + classesM.subitem}>
                        <a href={subitem.link}>{subitem.name}</a>
                        {subitem.submenu ? (
                          <FaAngleDown
                            style={{
                              rotate:
                                openSubItem === subitem.name
                                  ? '180deg'
                                  : '0deg',
                              transform:
                                openSubItem === subitem.name
                                  ? 'translateY(-0.2rem)'
                                  : 'translateY(0.2rem)',
                            }}
                            onClick={() => {
                              if (openSubItem === subitem.name)
                                setOpenSubItem('');
                              else setOpenSubItem(subitem.name);
                            }}
                            className={classesM.downIcon}
                          />
                        ) : null}
                      </div>
                      {subitem.submenu ? (
                        <div
                          className={classesM.subItems}
                          style={{
                            maxHeight:
                              openSubItem === subitem.name
                                ? `${subitem.sublinks.length * 4}rem`
                                : 0,
                            overflow: 'hidden',
                          }}
                        >
                          {subitem.sublinks.map((ssitem) => (
                            <div
                              className={classesM.item + ' ' + classesM.subitem}
                            >
                              <a href={ssitem.link}>{ssitem.name}</a>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </>
                  ))}
                </div>
              ) : null}
            </>
          ))}
        </div>
      </>
    );
  else
    return (
      <>
        <nav className={classes.navDesktop}>
          <div
            className={classes.scrolledBg}
            style={{
              height: headerScrolled || isCommon ? '3.8rem' : '0',
              opacity: headerScrolled || isCommon ? 1 : 0,
            }}
          />
          <div
            className={classes.navWrap}
            style={{
              transform: `translateY(${
                headerScrolled || isCommon ? '-6rem' : '0'
              })`,
            }}
          >
            <div className={classes.topBar}>
              <img
                src={logoSvg}
                alt="IIIT-Bh Logo"
                className={classes.iiitLogo}
              />
              <div className={classes.nameAddr}>
                <div>
                  International Institute of Information Technology Bhubaneswar
                </div>
                <div>Gothapatana, Bhubaneswar, Odisha, India - 751029</div>
              </div>
            </div>

            <div className={classes.mainmenu}>
              <ul className={classes.menu}>
                {menuData.map((item) => (
                  <li
                    style={{
                      hover: { color: 'white' },
                    }}
                  >
                    <a
                      href={item.link}
                      className={classes.hoverLink}
                      style={{
                        color: headerScrolled || isCommon ? 'white' : 'black',
                        hover: { color: 'white' },
                      }}
                    >
                      {item.name}
                      {item.submenu ? (
                        <FaAngleDown className={classes.icon} />
                      ) : null}
                    </a>
                    {item.submenu ? (
                      <ul className={classes.options}>
                        {item.sublinks.map((subitem) => (
                          <li>
                            <a href={subitem.link}>
                              <span>{subitem.name}</span>{' '}
                              {subitem.submenu ? (
                                <FaAngleRight className={classes.icon} />
                              ) : null}
                            </a>
                            {subitem.submenu ? (
                              <ul className={classes.options}>
                                {subitem.sublinks.map((subsubitem) => (
                                  <li>
                                    <a href={subsubitem.link}>
                                      <span>{subsubitem.name}</span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
        {isCommon ? <div className={classes.topGap} /> : null}
      </>
    );
}
