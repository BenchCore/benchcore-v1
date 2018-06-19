# BenchCore MultiChain V1

Home to the [BenchCore](https://benchcore.io) MultiChain and currently 6 cryptocurrencies - `BEX`, `MUZ`, `DAN`, `SHARE`, `SHOP`, `VID` and more to come. BenchCore gives developers and companies the easiest pathway to launching their own blockchain, explorer, wallets and more, without much development experience.

## Table of Contents

- [Background](#background)
- [Fork Upgrades](#fork-upgrades)
  - [Planned Features](#planned-features)
  - [Performance](#performance)
- [Installation](#installation)
  - [Vagrant Installation](#install-with-vagrant)
  - [Manual Installation](#manual-installation)
- [Launch Networks](#launch-networks)
  - [BenchCore](#launch-benchcore)
  - [BenchCore Test Network](#launch-benchcore-test-network)
  - [ARK](#launch-ark)
  - [MUZ Network](#launch-muz-network)
  - [MUZ Test Network](#launch-muz-test-network)
  - [DAN Network](#launch-dan-network)
  - [DAN Test Network](#launch-dan-test-network)
  - [SHARE Network](#launch-share-network)
  - [SHARE Test Network](#launch-share-test-network)
  - [SHOP Network](#launch-shop-network)
  - [SHOP Test Network](#launch-shop-test-network)
  - [VID Network](#launch-vid-network)
  - [VID Test Network](#launch-vid-test-network)
- [Create A SideChain](#create-a-sidechain)
- [Libraries](#libraries)
- [Resources](#resources)
- [Why Decentralized Internet](#why-the-internet-must-have-a-decentralized-alternative)
- [Bench On The dWeb](#bench-on-the-dweb)
- [License](#license)
- [Copyright](#license)

## Background
BenchCore was built from Ark's original blockchain [ark-node](https://github.com/ArkEcosystem/ark-node), which derived from [Lisk](https://lisk.io) and was originally known as **Crypti**. It has come a long way since then and is one of the most battle tested blockchain libraries on the face of the planet.

We have made the following upgrades to `ark-node`:

## Fork Upgrades

This is a fork from `Ark` with the following features:
- Removed SmartBridges and added SideChains
- Updated `Epoch Time` and some other constants
- Updated Address Prefix For Root Chain to `A` or `25`
- Fixed Many Issues With `ArkCommander` and rebuilt the installer UI.
- Create a multichain-like network ecosystem and all networks can be started via the package.JSON
- Cleaned up createGenesisBlock and renamed `createBenchGenesis`
- Redesigned Paper Wallet UI
- Redesigned Desktop Wallet UI and added new multichain network features
- Redesigned Explorer UI and added BitShares DEX market pricing feature

### Planned features:
- UI for SideChain Creation
- Automatic codebase duplication
- Make the codebase universal, by removing token names and blockchain names
- Add `Potion #9` (More on this in the future)

### Performance
- Testnet produces 5tx/s
- Devnet produces 10tx/s


## Installation

To easily install BenchCore, just copy and paste the following lines into your terminal.
```
cd
wget https://benchcore.io/installer.sh
bash installer.sh
```

### Install With Vagrant

[Vagrant](https://www.vagrantup.com/) is a virtual development environment manager backed by a provider like [VirtualBox](https://www.virtualbox.org/wiki/Downloads).

To start the Vagrant environment:

```
vagrant up
```

All dependency installation and configuration for the dev environment is in the `VagrantFile`. After installation, ark-node will automatically start and log all output to the console.

To log into the Vagrant environment:

```
vagrant ssh
```

To destroy and revert to the original state:

```
vagrant destroy
vagrant up
```

There will be a drive shared with the host machine inside the VM, mounted at `/vagrant`.

### Manual Installation

Install essentials:

```
sudo apt-get update
sudo apt-get install -y curl build-essential python git
```

Install PostgreSQL (min version: 9.5.2)

```
sudo apt-get install -y postgresql postgresql-contrib libpq-dev
sudo -u postgres createuser --createdb --password $USER
```

Install Node.js (tested with version 6.9.2, but any recent LTS release should do):

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh 2>/dev/null | bash >>install.log && export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && nvm install 6.9.5 >>install.log && nvm use 6.9.5 >>install.log && nvm alias default 6.9.5 >>install.log
```

Install grunt-cli (globally):

```
sudo npm install grunt-cli -g
```

Clone this repository
```
git clone https://github.com/benchcore/benchcore-v1.git /opt/benchcore
cd /opt/benchcore
```

Install node modules:
```
npm install libpq secp256k1
npm install
```

## Launch Networks

### Launch BenchCore
To launch BenchCore's Livenet
```
createdb bench_live
npm run start:bex
```

To launch BenchCore's Livenet CLI
```
npm run start:bexcli
```

### Launch BenchCore Test Network
To launch BenchCore's test network
```
createdb bench_test
npm run start:bextest
```

### Launch ARK
To launch Ark's Mainnet
```
createdb ark_mainnet
npm run start:ark
```

### Launch MUZ Network
To launch MUZ Network (dMusic) Livenet
```
createdb muznet_live
npm run start:muz
```

To launch MUZ Network's CLI
```
npm run start:muzcli
```

### Launch MUZ Test Network
To launch MUZ Network (dMusic) test network
```
createdb muznet_test
npm run start:muztest
```

### Launch SHARE Network
To launch SHARE Network (dShare) Livenet
```
createdb sharenet_live
npm run start:share
```

To launch SHARE Network's CLI
```
npm run start:sharecli
```

### Launch SHARE Test Network
To launch SHARE Network (SHARE) test network
```
createdb sharenet_test
npm run start:sharetest
```

### Launch DAN Network
To launch DAN Network (dAN) Livenet
```
createdb dannet_live
npm run start:dan
```

To launch DAN Network's CLI
```
npm run start:dancli
```

### Launch DAN Test Network
To launch SHARE Network (dAN) test network
```
createdb dannet_test
npm run start:dantest
```

### Launch SHOP Network
To launch SHOP Network (SHOP) Livenet
```
createdb shopnet_live
npm run start:shop
```

To launch SHOP Network's CLI
```
npm run start:shopcli
```

### Launch SHOP Test Network
To launch SHOP Network (SHOP) test network
```
createdb shopnet_test
npm run start:shoptest
```

### Launch VID Network
To launch VID Network (dVid) Livenet
```
createdb vidnet_live
npm run start:vid
```

To launch VID Network's CLI
```
npm run start:vidcli
```

### Launch VID Test Network
To launch VID Network (dVid) test network
```
createdb vidnet_test
npm run start:vidtest
```

**NOTE:** The **port**, **address**, **genesis block** and **config-path** can be overridden by providing the relevant command switch:
```
node app.js -p [port] -a [address] -c [config-path] -g [genesisBlock-path]
```
This allow you to run several different networks, or your own private chain


## Create A SideChain
Generate a genesisBlock.json + a default config.json containing all passphrases of genesis delegates
```
node tasks/createBenchGenesis.js
```

Be sure to configure this file for your needs

- a genesisBlock.json containing the genesis block
- a config.json containing configuration to start relay nodes
- an autoforging config.json containing configuration to start all delegates on a single node (for testing purpose)
- a bunch of config files to distribute to different configured delegate nodes starting the network.
- a delegatesPassphrases.json containing details about the genesis delegates
- a genesisPassphrase.json containing the details of delegates that will launch your network


Obviously you can hack away tasks/createGenesisBlock.js for your own custom use.

You can the start with your own chain on a single node (all delegates will forge on your single node) using:
```
createdb networkname_type
npm run start:yourchain
```

**Make sure to add this to the package.json file, as we have added other networks, so you can use the above commands**

Then you can distribute the config.json (without the delegates secrets inside, and with custom peers settings) to peers to let them join your SideChain.


## Libraries
- [benchJS](https://github.com/benchcore/bcorejs) - Javascript Library For BenchCore RootChains and SideChains
- [benchcore-explorer](https://github.com/benchcore/benchcore-explorer) - Vue.js-based Explorer For BenchCore RootChains and SideChains
- [benchCLI](https://github.com/benchcore/benchcli) - Javascript Command CLI For BenchCore RootChains and SideChains
- [benchcore-v1](https://github.com/benchcore/benchcore-v1) - BenchCore V1 MultiChain Core
- [benchcore](https://github.com/benchcore/benchcore) - BenchCore V2 MultiChain Modular Core
- [bench-paper](https://github.com/benchcore/bench-paper) - BenchCore (BEX) Paper Wallet Generator via [https://paper.benchcore.io](https://paper.benchcore.io)
- [benchwallet](https://github.com/benchcore/benchwallet) - BenchCore MultiChain Wallet For Desktops (Mac, Linux and Windows)
- [benchwallet-mobile](https://github.com/benchcore/benchwallet-mobile) - BenchCore MultiChain Wallet For Mobile Phones (Android/iOS)
- [benchcore-launcher](https://github.com/benchcore/benchcore-launcher) - BenchCore V2 MultiChain Modular Core Easy Deployment Script
- [benchcore-web-wallet](https://github.com/benchcore/benchcore-web-wallet) - BenchCore Web Wallet via [https://wallet.benchcore.io](https://wallet.benchcore.io)

## Resources
- [BenchCore Website](https://benchcore.io) - Official BenchCore Website
- [BenchCore API V1 Docs](https://api.benchcore.io/v1/) - Official BenchCore API V1 Documentation
- [BenchCore API V2 Docs](https://api.benchcore.io/v2/) - Official BenchCore API V2 Documentation
- [BenchCore Guide](https://docs.benchcore.io) - Official BenchCore Documentation
- [BenchCore Support](https://help.benchcore.io) - Official BenchCore Support Site
- [BenchCore Community](https://community.benchcore.io) - Official BenchCore Community Forums
- [BenchCore Developers Chat](https://chat.benchcore.io) - Official BenchCore Developer Chat (This is not a community chat.)
- [BenchCore Installation Guide](https://docs.benchcore.io/install) - Official Installation Guide For BenchCore V1 and V2


## Why The Internet Must Have A Decentralized Alternative
Today, the internet is more censored than ever and it's only getting worse. Our mission with the [dWeb Protocol](https://github.com/distributedweb/dweb) was to create a truly powerful P2P protocol, around [benOS](https://github.com/benchOS/benos), [dBrowser](https://github.com/benchOS/dbrowser) and many of benOS' underlying libraries to bring the most powerful P2P products to life. In the last few months, by rebuilding P2P technologies that have existed since the early 2000s, we have built a powerful suite of decentralized libraries for benOS and the Bench Network, that will only improve over time. But we also brought new ideas to life, like:

- [dDrive](https://github.com/distributedweb/ddrive)
- [dExplorer](https://github.com/distributedweb/dexplorer)
- [dDatabase](https://github.com/distributedweb/ddatabase)
- [dSites](https://github.com/distributedweb/dsites)
- [dPack](https://github.com/distributedweb/dpack)
- [benFS](https://github.com/benchOS/benfs)
- [DCDN](https://github.com/distributedweb/dcdn)
- [Rocketainer](https://github.com/distributedweb/rocketainer)
- [RocketOS](https://github.com/distributedweb/rocketos)
- [dNames](https://github.com/distributedweb/dnames)
- [P2PDNS](https://github.com/distributedweb/p2pdns)
- [dWebFS](https://github.com/distributedweb/dwebfs)
- [dWebDB](https://github.com/distributedweb/dwebdb)
- [MeteorIDE](https://github.com/distributedweb/meteorIDE)
- [Kepler](https://github.com/benchlab/kepler)
- [Neutron](https://github.com/benchlab/neutron)
- [Designate](https://github.com/benchlab/designate)
- [Nova](https://github.com/benchlab/nova)

and more! These were the protocols and libraries that we needed to create a completely decentralized operating system, where everything was distributed, protected and people were once again in control of their data. benOS is made up of over 1100+ different libraries that we are releasing on a day-by-day basis as we move them to a stable/production state. While financial support is great for this open source project, we need developers who want to be some of the first to build the `dApps` and `dSites` of the future. We have to take back what our forefathers originally designed for freedom, by making our code the law, instead of releasing weak and highly centralized applications where law cannot be applied because the code lacks the foundation to implement a legal framework for itself. Join us for a truly historic journey on the [BenchLabs Telegram](https://t.me/benchlabs). See you there.

### Bench On The dWeb
[dweb://bench.dnames.io](dweb://bench.dnames.io) // dNames Short Link
[dweb://3EDAE09848B77401445B7739CAFCE442DDE1752AED63025A1F94E6A86D7E9F04](dweb://3EDAE09848B77401445B7739CAFCE442DDE1752AED63025A1F94E6A86D7E9F04) // dWeb Key Link

In order to make the links above clickable or to view these links period, you will need [dBrowser](https://github.com/benchOS/dbrowser) (Available for Mac OSX, Linux, Windows and soon to be available on iOS/Android)

#### "The Code Is The Law" - Stan Larimer - Godfather of BitShares.

## License
[MIT](LICENSE.md)
<br><br>
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
<br>
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://js.benchcore.io)
<br>
[![dWebShield](https://github.com/benchlab/dweb-shields/blob/master/shields/dweb-protocol-shield.svg)](https://dwebs.io)

## Copyright
Copyright (c) 2018 Distributed Webs Project. All rights reserved.
