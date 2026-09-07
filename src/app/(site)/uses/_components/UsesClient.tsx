'use client'

import React from 'react'

import ContentHeader from '../../../../components/ui/ContentHeader'
import Layout from '../../../../components/layout/Layout'

const UsesClient = () => (
  <Layout showFooter>
    <ContentHeader
      title="Uses"
      excerpt="Software and Hardware That Makes Me Productive"
      coverImage="/assets/uses/cover.png"
    />
    <p>A collection of the software, hardware, and gear I use day to day.</p>
    <h2>Editor</h2>
    <ul>
      <li>
        <a href="https://www.jetbrains.com/idea/">IntelliJ IDEA</a>
      </li>
      <li>
        <a href="https://dank.sh/">Dank Mono</a> typeface
      </li>
    </ul>
    <h2>Desktop Apps</h2>
    <p>
      I use macOS for everything. The following apps are installed on all my
      machines.
    </p>
    <ul>
      <li>
        <a href="https://1password.com/">1Password</a>
      </li>
      <li>
        <a href="https://www.adobe.com/products/photoshop.html">
          Adobe Photoshop
        </a>
      </li>
      <li>
        <a href="https://karabiner-elements.pqrs.org/">Karabiner-Elements</a>
      </li>
      <li>
        <a href="https://magnet.crowdcafe.com/">Magnet</a>
      </li>
      <li>
        <a href="https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage">
          Microsoft OneDrive
        </a>
      </li>
      <li>
        <a href="https://obsidian.md/">Obsidian</a>
      </li>
      <li>
        <a href="https://www.apple.com/safari/">Safari</a>
      </li>
      <li>
        <a href="https://www.techsmith.com/screen-capture.html">Snagit</a>
      </li>
    </ul>
    <h2>AI Tools</h2>
    <ul>
      <li>
        <a href="https://claude.com/">Claude</a> on the Max plan
      </li>
      <li>
        <a href="https://chatgpt.com/">ChatGPT</a> on the Plus plan
      </li>
    </ul>
    <h2>Hardware</h2>

    <h3>Computer</h3>
    <ul>
      <li>
        <a href="https://www.apple.com/macbook-pro/">MacBook Pro 14" (M4 Pro)</a>
        <ul>
          <li>24 GB unified memory</li>
          <li>512 GB SSD</li>
        </ul>
      </li>
    </ul>

    <h3>Audio</h3>
    <ul>
      <li>
        <a href="https://www.apple.com/airpods-max/">AirPods Max</a>
      </li>
      <li>
        <a href="https://rode.com/en-us/microphones/usb/podmic-usb">
          RØDE PodMic USB
        </a>{' '}
        on a{' '}
        <a href="https://rode.com/en-us/accessories/stands-bars/psa1-plus">
          RØDE PSA1+
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
        <a href="https://www.keychron.com/products/keychron-k4-pro-qmk-via-wireless-mechanical-keyboard">
          Keychron K4 Pro
        </a>{' '}
        keyboard
      </li>
      <li>
        <a href="https://www.dell.com/en-us/shop/alienware-38-curved-gaming-monitor-aw3821dw/apd/210-axvg/monitors-monitor-accessories">
          Alienware AW3821DW
        </a>{' '}
        as main screen
      </li>
      <li>
        Two{' '}
        <a href="https://www.dell.com/en-us/shop/dell-24-monitor-s2421h/apd/210-axhf/monitors-monitor-accessories">
          Dell S2421H
        </a>{' '}
        as secondary screens
      </li>
      <li>
        <a href="https://www.ergotron.com/en-us/products/product-details/45-509#/?color=white">
          Ergotron LX Dual Stacking Tall Pole
        </a>{' '}
        monitor arm
      </li>
      <li>
        <a href="https://www.logitech.com/en-us/products/webcams/brio-4k-hdr-webcam.html">
          Logitech Brio
        </a>{' '}
        webcam
      </li>
    </ul>

    <h3>On the Go</h3>
    <ul>
      <li>
        <a href="https://www.apple.com/iphone-17-pro/">iPhone 17 Pro 256 GB</a>
      </li>
      <li>
        <a href="https://www.apple.com/ipad-pro/">iPad Pro 11" (M4)</a> with{' '}
        <a href="https://www.apple.com/apple-pencil/">Apple Pencil Pro</a> for
        note-taking
      </li>
      <li>
        <a href="https://www.logitech.com/en-us/products/mice/mx-anywhere-3.html">
          Logitech MX Anywhere 3
        </a>{' '}
        portable mouse
      </li>
      <li>
        <a href="https://evergoods.us/products/civic-panel-loader-waxed-canvas">
          Evergoods Civic Panel Loader 24L
        </a>{' '}
        waxed canvas backpack
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

export default UsesClient
