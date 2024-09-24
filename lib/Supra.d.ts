/// <reference types="node" />
import Transport from "@ledgerhq/hw-transport";
interface AppConfig {
    version: string;
}
interface AddressData {
    publicKey: Buffer;
    chainCode: Buffer;
    address: string;
}
/**
 * Supra API
 *
 * @param transport a transport for sending commands to a device
 * @param scrambleKey a scramble key
 *
 * @example
 * import Supra from "hw-app-supra";
 * const supra = new Supra(transport);
 */
export default class Supra {
    readonly transport: Transport;
    constructor(transport: Transport, scrambleKey?: string);
    /**
     * Get application version.
     *
     * @returns an object with the version field
     *
     * @example
     * supra.getVersion().then(r => r.version)
     */
    getVersion(): Promise<AppConfig>;
    /**
     * Get Supra address (public key) for a BIP32 path.
     *
     * Because Supra uses Ed25519 keypairs, as per SLIP-0010
     * all derivation-path indexes will be promoted to hardened indexes.
     *
     * @param path a BIP32 path
     * @param display flag to show display
     * @returns an object with publicKey, chainCode, address fields
     *
     * @example
     * supra.getAddress("m/44'/637'/1'/0'/0'").then(r => r.address)
     */
    getAddress(path: string, display?: boolean): Promise<AddressData>;
    /**
     * Sign an Supra transaction.
     *
     * @param path a BIP32 path
     * @param txBuffer serialized transaction
     *
     * @returns an object with the signature field
     *
     * @example
     * supra.signTransaction("m/44'/637'/1'/0'/0'", txBuffer).then(r => r.signature)
     */
    signTransaction(path: string, txBuffer: Buffer): Promise<{
        signature: Buffer;
    }>;
    private sendToDevice;
    private pathToBuffer;
    private serializePath;
    private publicKeyToAddress;
    private throwOnFailure;
}
export {};
//# sourceMappingURL=Supra.d.ts.map