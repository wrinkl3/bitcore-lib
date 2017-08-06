'use strict';

var solarcore = module.exports;

// module information
solarcore.version = 'v' + require('./package.json').version;
solarcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of solarcore-lib found. ' +
      'Please make sure to require solarcore-lib and check that submodules do' +
      ' not also include their own solarcore-lib dependency.';
    throw new Error(message);
  }
};
solarcore.versionGuard(global._solarcore);
global._solarcore = solarcore.version;

// crypto
solarcore.crypto = {};
solarcore.crypto.BN = require('./lib/crypto/bn');
solarcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
solarcore.crypto.Hash = require('./lib/crypto/hash');
solarcore.crypto.Random = require('./lib/crypto/random');
solarcore.crypto.Point = require('./lib/crypto/point');
solarcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
solarcore.encoding = {};
solarcore.encoding.Base58 = require('./lib/encoding/base58');
solarcore.encoding.Base58Check = require('./lib/encoding/base58check');
solarcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
solarcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
solarcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
solarcore.util = {};
solarcore.util.buffer = require('./lib/util/buffer');
solarcore.util.js = require('./lib/util/js');
solarcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
solarcore.errors = require('./lib/errors');

// main bitcoin library
solarcore.Address = require('./lib/address');
solarcore.Block = require('./lib/block');
solarcore.MerkleBlock = require('./lib/block/merkleblock');
solarcore.BlockHeader = require('./lib/block/blockheader');
solarcore.HDPrivateKey = require('./lib/hdprivatekey.js');
solarcore.HDPublicKey = require('./lib/hdpublickey.js');
solarcore.Networks = require('./lib/networks');
solarcore.Opcode = require('./lib/opcode');
solarcore.PrivateKey = require('./lib/privatekey');
solarcore.PublicKey = require('./lib/publickey');
solarcore.Script = require('./lib/script');
solarcore.Transaction = require('./lib/transaction');
solarcore.URI = require('./lib/uri');
solarcore.Unit = require('./lib/unit');

// dependencies, subject to change
solarcore.deps = {};
solarcore.deps.bnjs = require('bn.js');
solarcore.deps.bs58 = require('bs58');
solarcore.deps.Buffer = Buffer;
solarcore.deps.elliptic = require('elliptic');
litecore.deps.scryptsy = require('scryptsy');
solarcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
solarcore.Transaction.sighash = require('./lib/transaction/sighash');
