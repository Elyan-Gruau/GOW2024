import * as BABYLON from '@babylonjs/core';

export class InputController {
    private _keys: { [key: string]: boolean } = {};

    constructor(scene: BABYLON.Scene) {
        // Attacher les gestionnaires d'événements de clavier à la scène
        scene.onKeyboardObservable.add((kbInfo) => this._handleKeyboardInput(kbInfo));
    }

    private _handleKeyboardInput(kbInfo: BABYLON.KeyboardInfoPre): void {
        const key = kbInfo.event.key;

        if (kbInfo.type === BABYLON.KeyboardEventTypes.KEYDOWN) {
            this._keys[key] = true;
        } else if (kbInfo.type === BABYLON.KeyboardEventTypes.KEYUP) {
            this._keys[key] = false;
        }
    }

    public isKeyDown(key: string): boolean {
        return this._keys[key] === true;
    }
}