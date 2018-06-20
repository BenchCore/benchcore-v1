'use strict';

var bcorejs = require('bcorejs');

function Crypto(scope){
	this.scope = scope;
	this.network = scope.config.network;
}

Crypto.prototype.makeKeypair = function (seed) {
	return bcorejs.crypto.getKeys(seed, this.network);
};

Crypto.prototype.sign = function (hash, keypair) {
	return keypair.sign(hash).toDER().toString("hex");
};

Crypto.prototype.verify = function (hash, signatureBuffer, publicKeyBuffer) {
	try {
		var ecsignature = bcorejs.ECSignature.fromDER(signatureBuffer);
		var ecpair = bcorejs.ECPair.fromPublicKeyBuffer(publicKeyBuffer, this.network);
		return ecpair.verify(hash, ecsignature);
	} catch (error){
		return false;
	}
};

module.exports = Crypto;
