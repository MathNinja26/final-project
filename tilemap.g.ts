// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001020202020202020202020202020203080a0a0b0b0b0b0b0b0b0b0b0b0b0b04080a0a09090909090909090909090b04080b0909090909090909090909090b04080b0909090909090909090909090b04080b0909090909090909090909090b04080b0909090909090909090909090b04080b09090909090909090909090a0a04080b09090909090909090909090a0a04080b0909090909090909090909090b04080b0909090909090909090909090b04080b0909090909090909090909090b04080b0909090909090909090909090b04080b09090909090a0a09090909090b04080b0b0b0b0b0b0a0a0b0b0b0b0b0b0407060606060606060606060606060605`, img`
. . . . . . . . . . . . . . . . 
. 2 2 . . . . . . . . . . . . . 
. 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 . 
. . . . . . . . . . . . . 2 2 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundCenter,sprites.dungeon.stairLadder,sprites.dungeon.floorLight2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
