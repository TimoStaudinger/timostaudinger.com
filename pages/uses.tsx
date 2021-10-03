import React from 'react'
import ContentHeader from '../components/ContentHeader'
import Image from '../components/Image'

import Layout from '../components/Layout'

const Uses = () => (
  <Layout showFooter>
    <ContentHeader
      title="Uses"
      excerpt="Software and Hardware That Makes Me Productive"
      coverImage="/assets/uses/cover.png"
    />
    <p>
      People regularly ask me about what software and hardware I use for my
      work. I send them this page.
    </p>
    <h2>Editor</h2>
    <ul>
      <li>
        <a href="https://code.visualstudio.com/">Visual Studio Code</a>
      </li>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=cev.overnight">
          Overnight
        </a>{' '}
        editor theme
      </li>
      <li>
        <a href="https://dank.sh/">Dank Mono</a> typeface
      </li>
    </ul>
    <h3>Visual Studio Code Extensions</h3>
    <ul>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo">
          Apollo GraphQL
        </a>
      </li>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight">
          Color Highlight
        </a>
      </li>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker">
          Docker
        </a>
      </li>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv">
          DotENV
        </a>
      </li>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">
          ESLint
        </a>
      </li>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense">
          npm Intellisense
        </a>
      </li>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell">
          PowerShell
        </a>
      </li>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">
          Prettier
        </a>
      </li>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv">
          Rainbow CSV
        </a>
      </li>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl">
          Remote - WSL
        </a>
      </li>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=adpyke.vscode-sql-formatter">
          SQL Formatter
        </a>
      </li>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=rafamel.subtle-brackets">
          Subtle Match Brackets
        </a>
      </li>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight">
          TODO Highlight
        </a>
      </li>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode">
          Visual Studio IntelliCode
        </a>
      </li>
      <li>
        <a href="https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml">
          YAML
        </a>
      </li>
    </ul>
    <h2>Desktop Apps</h2>
    <p>
      I generally use Windows 11 for everything. The following apps are
      installed on all my machines.
    </p>
    <ul>
      <li>
        <a href="https://www.adobe.com/products/photoshop.html">
          Adobe Photoshop
        </a>
      </li>
      <li>
        <a href="https://www.microsoft.com/en-us/edge">Microsoft Edge</a>
      </li>
      <li>
        <a href="https://www.notion.so/">Notion</a>
      </li>
      <li>
        <a href="https://www.techsmith.com/screen-capture.html">Snagit</a>
      </li>
      <li>
        <a href="https://docs.microsoft.com/en-us/windows/wsl/">
          Windows Subsystem for Linux 2
        </a>
      </li>
      <li>
        <a href="https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701">
          Windows Terminal
        </a>
      </li>
    </ul>
    <h2>Hardware</h2>

    <Image src="/assets/uses/desk.jpg" alt="My desk setup" />

    <h3>Desktop PC</h3>
    <p>
      My main machine is a home built desktop PC. It currently uses the
      following components:
    </p>
    <ul>
      <li>
        <a href="https://pcpartpicker.com/product/QKJtt6/amd-ryzen-7-3700x-36-ghz-8-core-processor-100-100000071box">
          AMD Ryzen 7 3700X
        </a>
      </li>
      <li>
        <a href="https://pcpartpicker.com/product/mYYLrH/evga-geforce-rtx-2070-8gb-black-video-card-08g-p4-1071-kr">
          EVGA GeForce RTX 2070 Black
        </a>
      </li>
      <li>
        <a href="https://pcpartpicker.com/product/BcyV3C/nzxt-h200-white-mini-itx-tower-case-ca-h200b-w1">
          NZXT H200 Mini ITX case
        </a>
      </li>
      <li>
        <a href="https://pcpartpicker.com/product/kbx2FT/asus-rog-strix-b450-i-gaming-mini-itx-am4-motherboard-strix-b450-i-gaming">
          Asus ROG Strix B450-I motherboard
        </a>
      </li>
      <li>
        <a href="https://pcpartpicker.com/product/mLQG3C/corsair-vengeance-rgb-pro-16-gb-2-x-8-gb-ddr4-3000-memory-cmw16gx4m2c3000c15w">
          Corsair Vengeance RGB Pro 16 GB (2x8 GB) DDR4-3000 memory
        </a>
      </li>
      <li>
        <a href="https://pcpartpicker.com/product/kQZzK8/adata-xpg-sx8200-pro-2-tb-m2-2280-nvme-solid-state-drive-asx8200pnp-2tt-c">
          ADATA XPG SX8200 Pro 2 TB M.2 NVME SSD
        </a>
      </li>
      <li>
        <a href="https://pcpartpicker.com/product/dMVG3C/noctua-nh-u12s-chromaxblack-55-cfm-cpu-cooler-nh-u12s-chromaxblack">
          Noctua NH-U12S CPU cooler
        </a>
      </li>
      <li>
        <a href="https://pcpartpicker.com/product/WrNypg/seasonic-focus-plus-gold-650w-80-gold-certified-fully-modular-atx-power-supply-ssr-650fx">
          SeaSonic FOCUS Plus Gold 650 W power supply
        </a>
      </li>
      <li>
        <a href="https://www.amazon.com/dp/B01AW5VGHS/">Night King</a>
      </li>
    </ul>

    <Image src="/assets/uses/pc.jpg" alt="My desktop PC" />

    <h3>Audio</h3>

    <ul>
      <li>
        <a href="https://drop.com/buy/massdrop-sennheiser-hd6xx">
          Sennheiser HD 6XX
        </a>
      </li>
      <li>
        <a href="https://www.schiit.com/products/magni-1">Schiit Magni 3+</a>{' '}
        and <a href="https://www.schiit.com/products/modi-1">Schiit Modi 3+</a>{' '}
        as DAC/amp stack
      </li>
      <li>
        <a href="https://www.bose.com/en_us/products/speakers/stereo_speakers/companion-2-series-iii-multimedia-speaker-system.html">
          Bose Companion 2 Series III
        </a>
      </li>
      <li>
        <a href="https://www.bluemic.com/en-us/products/yeti-nano/">
          Blue Yeti Nano
        </a>{' '}
        on a{' '}
        <a href="https://www.bluemic.com/en-us/products/compass/">
          Blue Compass
        </a>{' '}
        boom arm
      </li>
    </ul>
    <h3>Peripherals and Other Stuff</h3>
    <ul>
      <li>
        <a href="https://www.logitechg.com/en-us/products/gaming-mice/pro-x-superlight-wireless-mouse.910-005878.html">
          Logitech G Pro X Superlight
        </a>{' '}
        in white
      </li>
      <li>
        <a href="http://www.vortexgear.tw/vortex2_2.asp?kind=47&kind2=220&kind3=&kind4=999">
          Vortex Pok3r
        </a>{' '}
        with Cherry MX Brown switches
      </li>
      <li>
        <a href="https://www.maxkeyboard.com/max-falcon-20-rgb-custom-programmable-mini-macropad-mechanical-keyboard-assembled.html">
          MAX Falcon-20
        </a>{' '}
        number pad
      </li>
      <li>
        <a href="https://www.dell.com/en-us/shop/alienware-38-curved-gaming-monitor-aw3821dw/apd/210-axvg/monitors-monitor-accessories">
          Alienware AW3821DW
        </a>{' '}
        as main screen
      </li>
      <li>
        <a href="https://www.amazon.com/dp/B07ZP647GD">WIMAXIT 13.3" 1080p"</a>{' '}
        as tiny secondary screen
      </li>
      <li>
        <a href="https://www.ergotron.com/en-us/products/product-details/45-509#/?color=white">
          Ergotron LX Dual Stacking Tall Pole
        </a>{' '}
        monitor arm
      </li>
      <li>
        <a href="https://www.logitech.com/en-us/products/webcams/c920-pro-hd-webcam.html">
          Logitech C920
        </a>{' '}
        webcam
      </li>
      <li>
        <a href="https://store.google.com/us/product/pixel_stand">
          Google Pixel Stand
        </a>{' '}
        wireless charger
      </li>
    </ul>
    
    <h3>On the Go</h3>
    <ul>
      <li>
        <a href="https://store.google.com/us/category/phones">
          Google Pixel 4 64 GB
        </a>
      </li>
      <li>
        <a href="https://www.dell.com/en-us/member/shop/dell-laptops/xps-13-2-in-1-laptop/spd/xps-13-9310-2-in-1-laptop/x29310cto230h">
          Dell XPS 13 2-in-1 9310
        </a>
        <ul>
          <li>Intel Core i7-1165G7</li>
          <li>16 GB LPDDR4-4267 memory</li>
          <li>512 GB NVME SSD</li>
          <li>13.4" 16:10 FHD+ Touch Display (1920 x 1200)</li>
        </ul>
      </li>
      <li>
        <a href="https://www.logitech.com/en-us/products/mice/mx-anywhere-3.html">Logitech MX Anywhere 3</a> portable mouse
      </li>
      <li>
        <a href="https://remarkable.com/">reMarkable 2</a> for note-taking
      </li>
      <li>
        <a href="https://www.osprey.com/us/en/product/raptor-14-RAPTOR14S19.html">
          Osprey Raptor 14
        </a>{' '}
        backpack
      </li>
    </ul>

    <h3>Furniture</h3>
    <ul>
      <li>
        <a href="https://www.upliftdesk.com/uplift-v2-standing-desk-frame/">
          UPLIFT Standing Desk Frame V2
        </a>{' '}
        with{' '}
        <a href="https://www.ikea.com/us/en/p/karlby-countertop-birch-veneer-90335206/">
          IKEA Karlby
        </a>{' '}
        desktop
      </li>
      <li>
        <a href="https://www.hermanmiller.com/products/seating/office-chairs/aeron-chairs/">
          Herman Miller Aeron Chair
        </a>{' '}
        in size B, graphite color
      </li>
      <li>
        <a href="https://grovemade.com/product/wool-felt-desk-pad/">
          Grovemade Wool Felt Desk Pad
        </a>
        , small size with light shade
      </li>
    </ul>
  </Layout>
)

export default Uses
