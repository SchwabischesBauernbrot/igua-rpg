// This file is generated. Do not touch.
import { resolveSlopeLeft } from "./gameObjects/walls";
import { resolvePipeHorizontal } from "./gameObjects/walls";
import { resolveBlock } from "./gameObjects/walls";
import { resolveDoor } from "./gameObjects/door";
import { resolveSign } from "./gameObjects/sign";
import { resolveGate } from "./gameObjects/gate";
import { resolveValuableOrange } from "./gameObjects/valuable";
import { resolveSlopeRight } from "./gameObjects/walls";
import { resolveRegion } from "./gameObjects/region";
import { resolveDecalGameObject } from "./gameObjects/decal";
import { VolcanoCrystal } from "./textures";
import { VolcanoCrystalBuilding } from "./textures";
import { GlowingEdge } from "./textures";
import { VolcanoTempleExterior } from "./textures";
import { VolcanoInnShopBuilding } from "./textures";
import { VolcanoPillarBroken } from "./textures";
import { CrackSmall } from "./textures";
import { VolcanoCrystalStoop } from "./textures";
import { GroundSpeckles } from "./textures";
import { VolcanoChain } from "./textures";
import { VolcanoMineralDebris } from "./textures";
import { resolveValuableBlue } from "./gameObjects/valuable";
import { KeyRed } from "./textures";
import { GlowingCircle } from "./textures";
import { resolveNpc } from "./gameObjects/npc";
import { RoseVase } from "./textures";
import { BookCollection } from "./textures";
import { JungleShelfSmall } from "./textures";
import { Bottle1 } from "./textures";
import { Bottle2 } from "./textures";
import { JungleShelfLarge } from "./textures";
import { VolcanoBrickWall } from "./textures";
import { VolcanoFloralWallpaper } from "./textures";
import { VolcanoCrystalTile } from "./textures";
import { VolcanoOracleHouseReflection } from "./textures";
import { resolveFakeWall } from "./gameObjects/fakeWall";
import { resolveClownSneezy } from "./gameObjects/clownSneezy";
import { resolveClownWonderful } from "./gameObjects/clownWonderful";
import { resolvePipeLeftEnd } from "./gameObjects/walls";
import { resolvePipeRightEnd } from "./gameObjects/walls";
import { KeyGreen } from "./textures";
import { resolveLava } from "./gameObjects/lava";
import { CloudLong } from "./textures";
import { BallColorful } from "./textures";
import { SmallDecorativeRock } from "./textures";
import { VolcanoDeadBush } from "./textures";
import { GlowingDiamond } from "./textures";
import { resolvePortalFluid } from "./gameObjects/portalFluid";
import { Column } from "./textures";
import { OverheadLamp } from "./textures";
import { Pipe } from "./textures";
import { ColorfulBricks } from "./textures";
import { LightShelf } from "./textures";
import { FlyCage } from "./textures";
import { FlyCageBroken } from "./textures";
import { Cobweb } from "./textures";
import { Rainbow1 } from "./textures";
import { Rainbow2 } from "./textures";
import { SpikyBrushB } from "./textures";
import { SpikyBrushA } from "./textures";
import { resolveTreeStumpDestructive } from "./gameObjects/treeStumpDestructive";
import { resolveCommonClown } from "./gameObjects/commonClown";
import { resolveSpike } from "./gameObjects/spike";
import { resolvePath } from "./gameObjects/resolvePath";
import { CracksA } from "./textures";
import { VineSmall } from "./textures";
import { PoppingRocksBox } from "./textures";
import { resolveJungleTree } from "./gameObjects/jungleTree";
import { resolvePool } from "./gameObjects/pool";
import { resolveTreeStump } from "./gameObjects/treeStump";
import { JunglePlank } from "./textures";
import { JungleTempleExterior } from "./textures";
import { JungleHouse1 } from "./textures";
import { KeyYellowShrunken } from "./textures";
import { JungleTent } from "./textures";
import { SignNeonInn } from "./textures";
import { SignNeonBar } from "./textures";
import { KeyYellow } from "./textures";
import { DinerTable } from "./textures";
import { JunglePlankDecoration } from "./textures";
import { DontPoster } from "./textures";
import { JungleBrushHeavy } from "./textures";
import { JungleTreeRoot } from "./textures";
import { PaSpeaker } from "./textures";
import { CocktailGlass } from "./textures";
import { resolveBigua } from "./gameObjects/bigua";
import { GiantsExterior } from "./textures";
import { Obelisk } from "./textures";
import { PotteryOrangeDamaged } from "./textures";
import { OrnateCarpet } from "./textures";
import { GiantsDinerTable } from "./textures";
import { GiantsFoodStash } from "./textures";
import { resolveBoulder } from "./gameObjects/boulder";
import { SignTavern } from "./textures";
import { SignInn } from "./textures";
import { CrudeHouse } from "./textures";
import { CrudeHouseC } from "./textures";
import { CrateWooden } from "./textures";
import { CrudeHouseB } from "./textures";
import { GreenCable } from "./textures";
import { WhiskeyGlass } from "./textures";
import { WoodenStool } from "./textures";
import { Anchor } from "./textures";
import { resolvePipeLeft } from "./gameObjects/walls";
import { resolvePipeRight } from "./gameObjects/walls";
import { PotteryOrange } from "./textures";
import { Rope } from "./textures";
import { DesertTemple } from "./textures";
import { CandleSmallRed } from "./textures";

export const DesertCostumerArgs = {
    width: 448,
height: 256,
gameObjectsSupplier: () => {
  return {
    PotteryOrange: resolveDecalGameObject({
    x: 184,
y: 217,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: PotteryOrange
}),
PotteryOrangeDamaged: resolveDecalGameObject({
    x: 264,
y: 217,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: PotteryOrangeDamaged
}),
Cobweb: resolveDecalGameObject({
    x: 40,
y: 40,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: Cobweb
}),
OrnateCarpet: resolveDecalGameObject({
    x: 224,
y: 229,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: OrnateCarpet
}),
SpikyBrushB: resolveDecalGameObject({
    x: 184,
y: 211,
originX: 0.5,
originY: 1,
scaleX: 0.5,
scaleY: 0.5,
rotation: 0,
layerName: "TerrainDecals",
texture: SpikyBrushB
}),
RoseVase: resolveDecalGameObject({
    x: 400,
y: 219,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: RoseVase
}),
BehindCostumerGlow: resolveDecalGameObject({
    x: 224,
y: 224,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: GlowingCircle
}),
CracksA: resolveDecalGameObject({
    x: 154,
y: 146,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CracksA
}),
CracksA_1: resolveDecalGameObject({
    x: 224,
y: 56,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CracksA
}),
CracksA_2: resolveDecalGameObject({
    x: 400,
y: 104,
originX: 0,
originY: 0,
scaleX: -1,
scaleY: -1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CracksA
}),
LightShelf: resolveDecalGameObject({
    x: 304,
y: 188,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: LightShelf
}),
BookCollection: resolveDecalGameObject({
    x: 298,
y: 184,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: BookCollection
}),
LightShelf_1: resolveDecalGameObject({
    x: 128,
y: 188,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: LightShelf
}),
CandleSmallRed: resolveDecalGameObject({
    x: 136,
y: 184,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CandleSmallRed
}),
CandleSmallRed_1: resolveDecalGameObject({
    x: 120,
y: 184,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CandleSmallRed
}),
CloudLong: resolveDecalGameObject({
    x: 80,
y: 88,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_1: resolveDecalGameObject({
    x: 120,
y: 96,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_2: resolveDecalGameObject({
    x: 32,
y: 112,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_3: resolveDecalGameObject({
    x: 272,
y: 104,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_4: resolveDecalGameObject({
    x: 336,
y: 112,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_5: resolveDecalGameObject({
    x: 400,
y: 128,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
// @ts-ignore
Door: resolveDoor({"type":"Door","x":48,"y":192,"flippedX":false,"flippedY":false,"uid":"55913988_0","levelName":"DesertTown","checkpointName":"FromCostumer","name":"","depth":0}),
// @ts-ignore
Floor: resolveBlock({"type":"Block","x":0,"y":224,"width":496,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_1","name":"Floor","depth":0}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":0,"y":0,"width":32,"height":224,"flippedX":false,"flippedY":false,"uid":"55823268_2","name":"","depth":0}),
Player: {"type":"Player","x":96,"y":224,"flippedX":false,"flippedY":false,"uid":"55988047_4","faceRight":true,"name":"","depth":0},
// @ts-ignore
Window1: resolveRegion({"type":"Region","x":48,"y":88,"width":80,"height":32,"flippedX":false,"flippedY":false,"uid":"25971607_38","name":"Window1","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":32,"y":0,"width":464,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_42","name":"","depth":0}),
// @ts-ignore
Costumer: resolveNpc({"type":"NpcIguana","x":226,"y":224,"flippedX":true,"flippedY":false,"uid":"26367058_43","name":"Costumer","style":7,"depth":0}),
// @ts-ignore
Window2: resolveRegion({"type":"Region","x":184,"y":88,"width":80,"height":32,"flippedX":false,"flippedY":false,"uid":"25971607_44","name":"Window2","depth":0}),
// @ts-ignore
Window3: resolveRegion({"type":"Region","x":320,"y":104,"width":80,"height":32,"flippedX":false,"flippedY":false,"uid":"25971607_45","name":"Window3","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":320,"y":32,"width":128,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_46","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":416,"y":48,"width":32,"height":176,"flippedX":false,"flippedY":false,"uid":"55823268_47","name":"","depth":0}),
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":288,"y":16,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_49","name":"","depth":0}),
// @ts-ignore
SlopeRight_1: resolveSlopeRight({"type":"SlopeRight","x":384,"y":32,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_50","name":"","depth":0}),
// @ts-ignore
MirrorRegion: resolveRegion({"type":"Region","x":336,"y":164,"width":48,"height":56,"flippedX":false,"flippedY":false,"uid":"25971607_51","name":"MirrorRegion","depth":0}),
// @ts-ignore
PipeHorizontal: resolvePipeHorizontal({"type":"PipeHorizontal","x":112,"y":184,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_52","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_1: resolvePipeHorizontal({"type":"PipeHorizontal","x":288,"y":184,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_53","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_2: resolvePipeHorizontal({"type":"PipeHorizontal","x":48,"y":120,"width":80,"flippedX":false,"flippedY":false,"uid":"55841307_54","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_3: resolvePipeHorizontal({"type":"PipeHorizontal","x":184,"y":120,"width":80,"flippedX":false,"flippedY":false,"uid":"55841307_55","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_4: resolvePipeHorizontal({"type":"PipeHorizontal","x":320,"y":136,"width":80,"flippedX":false,"flippedY":false,"uid":"55841307_56","visible":false,"name":"","depth":0}),
MirrorCheckpoint: {"type":"Checkpoint","x":304,"y":224,"flippedX":false,"flippedY":false,"uid":"55940370_57","name":"MirrorCheckpoint","faceRight":false,"depth":0}
};
}
};

export const DesertFieldArgs = {
    width: 1552,
height: 472,
gameObjectsSupplier: () => {
  return {
    DesertTemple: resolveDecalGameObject({
    x: 440,
y: 328,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: DesertTemple
}),
SpikyBrushA: resolveDecalGameObject({
    x: 376,
y: 328,
originX: 0.5,
originY: 0.9,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushA
}),
SpikyBrushA_1: resolveDecalGameObject({
    x: 352,
y: 328,
originX: 0.5,
originY: 0.9,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushA
}),
SpikyBrushB: resolveDecalGameObject({
    x: 360,
y: 320,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
SpikyBrushB_1: resolveDecalGameObject({
    x: 512,
y: 244,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
SpikyBrushB_2: resolveDecalGameObject({
    x: 145,
y: 360,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
SpikyBrushB_3: resolveDecalGameObject({
    x: 1448,
y: 260,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
SpikyBrushB_4: resolveDecalGameObject({
    x: 744,
y: 373,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
SpikyBrushA_2: resolveDecalGameObject({
    x: 1096,
y: 408,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushA
}),
SpikyBrushA_3: resolveDecalGameObject({
    x: 1320,
y: 376,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushA
}),
Column: resolveDecalGameObject({
    x: 1528,
y: 384,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1.1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Column
}),
Column_1: resolveDecalGameObject({
    x: 1480,
y: 384,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1.275,
rotation: 0,
layerName: "BackgroundDecals",
texture: Column
}),
CloudLong: resolveDecalGameObject({
    x: 144,
y: 184,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_1: resolveDecalGameObject({
    x: 176,
y: 192,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_2: resolveDecalGameObject({
    x: 336,
y: 224,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_3: resolveDecalGameObject({
    x: 440,
y: 160,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_4: resolveDecalGameObject({
    x: 608,
y: 192,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_5: resolveDecalGameObject({
    x: 640,
y: 200,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_6: resolveDecalGameObject({
    x: 752,
y: 232,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_7: resolveDecalGameObject({
    x: 8,
y: 240,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_8: resolveDecalGameObject({
    x: 848,
y: 304,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_9: resolveDecalGameObject({
    x: 880,
y: 296,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_10: resolveDecalGameObject({
    x: 976,
y: 232,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_11: resolveDecalGameObject({
    x: 1152,
y: 312,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_12: resolveDecalGameObject({
    x: 1248,
y: 216,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_13: resolveDecalGameObject({
    x: 1272,
y: 224,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_14: resolveDecalGameObject({
    x: 1432,
y: 288,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_15: resolveDecalGameObject({
    x: 1544,
y: 168,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":0,"y":368,"width":312,"height":104,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
// @ts-ignore
TempleDoor: resolveDoor({"type":"Door","x":400,"y":296,"flippedX":false,"flippedY":false,"uid":"55913988_1","levelName":"DesertTemple","checkpointName":"","name":"TempleDoor","depth":0}),
// @ts-ignore
Sign: resolveSign({"type":"Sign","x":472,"y":328,"flippedX":false,"flippedY":false,"uid":"86706091_2","title":"Temple","message":"This is the ancient desert temple.","name":"","depth":0}),
Player: {"type":"Player","x":1352,"y":384,"flippedX":false,"flippedY":false,"uid":"55988047_3","faceRight":true,"name":"","depth":0},
// @ts-ignore
Gate: resolveGate({"type":"Gate","x":0,"y":336,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_4","levelName":"DesertTown","checkpointName":"FromField","name":"","depth":0}),
FromTown: {"type":"Checkpoint","x":72,"y":368,"flippedX":false,"flippedY":false,"uid":"55940370_5","name":"FromTown","faceRight":true,"depth":0},
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":232,"y":328,"width":80,"height":40,"flippedX":false,"flippedY":false,"uid":"55824435_6","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":312,"y":328,"width":288,"height":144,"flippedX":false,"flippedY":false,"uid":"55823268_7","name":"","depth":0}),
// @ts-ignore
SlopeLeft: resolveSlopeLeft({"type":"SlopeLeft","x":600,"y":328,"width":112,"height":56,"flippedX":false,"flippedY":false,"uid":"55845599_8","name":"","depth":0}),
// @ts-ignore
Sign_1: resolveSign({"type":"Sign","x":168,"y":368,"flippedX":false,"flippedY":false,"uid":"86706091_9","title":"Sand","message":"This is the desert.","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":600,"y":384,"width":168,"height":88,"flippedX":false,"flippedY":false,"uid":"55823268_10","name":"","depth":0}),
// @ts-ignore
SlopeLeft_1: resolveSlopeLeft({"type":"SlopeLeft","x":768,"y":384,"width":96,"height":32,"flippedX":false,"flippedY":false,"uid":"55845599_11","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":768,"y":416,"width":432,"height":56,"flippedX":false,"flippedY":false,"uid":"55823268_12","name":"","depth":0}),
// @ts-ignore
SlopeRight_1: resolveSlopeRight({"type":"SlopeRight","x":1112,"y":384,"width":88,"height":32,"flippedX":false,"flippedY":false,"uid":"55824435_13","name":"","depth":0}),
// @ts-ignore
Block_4: resolveBlock({"type":"Block","x":1200,"y":384,"width":352,"height":88,"flippedX":false,"flippedY":false,"uid":"55823268_14","name":"","depth":0}),
// @ts-ignore
SlopeRight_2: resolveSlopeRight({"type":"SlopeRight","x":1368,"y":256,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_15","name":"","depth":0}),
// @ts-ignore
Block_5: resolveBlock({"type":"Block","x":1400,"y":256,"width":152,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_16","name":"","depth":0}),
// @ts-ignore
SlopeRight_3: resolveSlopeRight({"type":"SlopeRight","x":1400,"y":288,"width":152,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_17","name":"","depth":0}),
// @ts-ignore
Digua: resolveNpc({"type":"NpcIguana","x":1400,"y":256,"flippedX":true,"flippedY":false,"uid":"26367058_18","name":"Digua","style":4,"depth":0}),
// @ts-ignore
PipeHorizontal: resolvePipeHorizontal({"type":"PipeHorizontal","x":344,"y":256,"width":200,"flippedX":false,"flippedY":false,"uid":"55841307_19","visible":false,"name":"","depth":0}),
// @ts-ignore
Gate_1: resolveGate({"type":"Gate","x":1520,"y":224,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_20","levelName":"DesertOutskirts","checkpointName":"FromDigua","name":"","depth":0}),
// @ts-ignore
Gate_2: resolveGate({"type":"Gate","x":1520,"y":352,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_21","levelName":"DesertOutskirts","checkpointName":"","name":"","depth":0}),
FromOutskirtsTop: {"type":"Checkpoint","x":1488,"y":256,"flippedX":false,"flippedY":false,"uid":"55940370_22","name":"FromOutskirtsTop","faceRight":false,"depth":0},
FromOutskirtsBottom: {"type":"Checkpoint","x":1488,"y":384,"flippedX":false,"flippedY":false,"uid":"55940370_23","name":"FromOutskirtsBottom","faceRight":false,"depth":0},
FromTemple: {"type":"Checkpoint","x":384,"y":328,"flippedX":false,"flippedY":false,"uid":"55940370_24","name":"FromTemple","faceRight":false,"depth":0},
// @ts-ignore
CommonClown: resolveCommonClown({"type":"CommonClown","x":696,"y":368,"flippedX":false,"flippedY":false,"uid":"68762216_25","name":"","depth":0}),
// @ts-ignore
CommonClown_1: resolveCommonClown({"type":"CommonClown","x":840,"y":400,"flippedX":false,"flippedY":false,"uid":"68762216_26","name":"","depth":0}),
// @ts-ignore
CommonClown_2: resolveCommonClown({"type":"CommonClown","x":1032,"y":408,"flippedX":false,"flippedY":false,"uid":"68762216_27","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_1: resolvePipeHorizontal({"type":"PipeHorizontal","x":460,"y":162,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_28","visible":false,"name":"","depth":0}),
// @ts-ignore
ValuableOrange: resolveValuableOrange({"type":"ValuableOrange","x":472,"y":56,"flippedX":false,"flippedY":false,"uid":"56004563_29","name":"","depth":0}),
// @ts-ignore
ValuableOrange_1: resolveValuableOrange({"type":"ValuableOrange","x":496,"y":40,"flippedX":false,"flippedY":false,"uid":"56004563_30","name":"","depth":0}),
// @ts-ignore
ValuableBlue: resolveValuableBlue({"type":"ValuableBlue","x":472,"y":24,"flippedX":false,"flippedY":false,"uid":"55991906_31","name":"","depth":0}),
Tumbleweed1: {"type":"Anchor","x":272,"y":288,"flippedX":false,"flippedY":false,"uid":"25979726_32","name":"Tumbleweed1","depth":0},
Tumbleweed2: {"type":"Anchor","x":920,"y":376,"flippedX":false,"flippedY":false,"uid":"25979726_33","name":"Tumbleweed2","depth":0}
};
}
};

export const DesertInnArgs = {
    width: 512,
height: 256,
gameObjectsSupplier: () => {
  return {
    WoodenStool: resolveDecalGameObject({
    x: 134,
y: 157,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: WoodenStool
}),
CracksA: resolveDecalGameObject({
    x: 56,
y: 64,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CracksA
}),
CracksA_1: resolveDecalGameObject({
    x: 232,
y: 168,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: -1.5707963267948966,
layerName: "BackgroundDecals",
texture: CracksA
}),
CracksA_2: resolveDecalGameObject({
    x: 480,
y: 128,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CracksA
}),
CrateWooden: resolveDecalGameObject({
    x: 456,
y: 136,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CrateWooden
}),
CrateWooden_1: resolveDecalGameObject({
    x: 424,
y: 136,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CrateWooden
}),
CrateWooden_2: resolveDecalGameObject({
    x: 440,
y: 112,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CrateWooden
}),
GlowingCircle: resolveDecalGameObject({
    x: 376,
y: 0,
originX: 0.5,
originY: 0.5,
scaleX: 2.125,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: GlowingCircle
}),
Rope: resolveDecalGameObject({
    x: 304,
y: 48,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 7,
rotation: 0,
layerName: "BackgroundDecals",
texture: Rope
}),
KeyRed: resolveDecalGameObject({
    x: 306,
y: 103,
originX: 0.286,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: KeyRed
}),
Cobweb: resolveDecalGameObject({
    x: 384,
y: 0,
originX: 1,
originY: 0,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Cobweb
}),
LightShelf: resolveDecalGameObject({
    x: 96,
y: 88,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: LightShelf
}),
LightShelf_1: resolveDecalGameObject({
    x: 136,
y: 104,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: LightShelf
}),
LightShelf_2: resolveDecalGameObject({
    x: 408,
y: 120,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: LightShelf
}),
RoseVase: resolveDecalGameObject({
    x: 144,
y: 104,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: RoseVase
}),
RoseVase_1: resolveDecalGameObject({
    x: 88,
y: 88,
originX: 0.5,
originY: 1,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: RoseVase
}),
DontPoster: resolveDecalGameObject({
    x: 192,
y: 128,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: DontPoster
}),
PotteryOrange: resolveDecalGameObject({
    x: 344,
y: 160,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: PotteryOrange
}),
PotteryOrange_1: resolveDecalGameObject({
    x: 323,
y: 160,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: PotteryOrange
}),
CloudLong: resolveDecalGameObject({
    x: 392,
y: 80,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_1: resolveDecalGameObject({
    x: 432,
y: 88,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_2: resolveDecalGameObject({
    x: 352,
y: 104,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
// @ts-ignore
Door: resolveDoor({"type":"Door","x":32,"y":128,"flippedX":false,"flippedY":false,"uid":"55913988_0","levelName":"DesertTown","checkpointName":"FromInn","name":"","depth":0}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":0,"y":160,"width":512,"height":96,"flippedX":false,"flippedY":false,"uid":"55823268_1","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":0,"y":0,"width":16,"height":160,"flippedX":false,"flippedY":false,"uid":"55823268_2","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":16,"y":0,"width":336,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_3","name":"","depth":0}),
Player: {"type":"Player","x":80,"y":160,"flippedX":false,"flippedY":false,"uid":"55988047_4","faceRight":true,"name":"","depth":0},
// @ts-ignore
Innkeeper: resolveNpc({"type":"NpcIguana","x":160,"y":160,"flippedX":true,"flippedY":false,"uid":"26367058_5","name":"Innkeeper","style":3,"depth":0}),
// @ts-ignore
SlopeLeft: resolveSlopeLeft({"type":"SlopeLeft","x":16,"y":32,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55845599_7","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":224,"y":32,"width":48,"height":64,"flippedX":false,"flippedY":false,"uid":"55823268_8","name":"","depth":0}),
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":120,"y":32,"width":104,"height":64,"flippedX":false,"flippedY":true,"uid":"55824435_9","name":"","depth":0}),
// @ts-ignore
RoomWall: resolveBlock({"type":"Block","x":232,"y":96,"width":32,"height":64,"flippedX":false,"flippedY":false,"uid":"55823268_10","name":"RoomWall","depth":0}),
// @ts-ignore
Block_4: resolveBlock({"type":"Block","x":480,"y":32,"width":32,"height":128,"flippedX":false,"flippedY":false,"uid":"55823268_11","name":"","depth":0}),
// @ts-ignore
SlopeRight_1: resolveSlopeRight({"type":"SlopeRight","x":400,"y":32,"width":80,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_12","name":"","depth":0}),
// @ts-ignore
SlopeLeft_1: resolveSlopeLeft({"type":"SlopeLeft","x":272,"y":32,"width":80,"height":32,"flippedX":false,"flippedY":true,"uid":"55845599_13","name":"","depth":0}),
// @ts-ignore
Block_5: resolveBlock({"type":"Block","x":400,"y":0,"width":112,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_14","name":"","depth":0}),
SleepHere: {"type":"Anchor","x":384,"y":152,"flippedX":false,"flippedY":false,"uid":"25979726_15","name":"SleepHere","depth":0},
// @ts-ignore
PipeHorizontal: resolvePipeHorizontal({"type":"PipeHorizontal","x":436,"y":112,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_16","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_1: resolvePipeHorizontal({"type":"PipeHorizontal","x":424,"y":136,"width":56,"flippedX":false,"flippedY":false,"uid":"55841307_17","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_2: resolvePipeHorizontal({"type":"PipeHorizontal","x":120,"y":104,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_18","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_3: resolvePipeHorizontal({"type":"PipeHorizontal","x":80,"y":88,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_19","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_4: resolvePipeHorizontal({"type":"PipeHorizontal","x":392,"y":120,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_20","visible":false,"name":"","depth":0}),
// @ts-ignore
Window: resolveRegion({"type":"Region","x":336,"y":72,"width":80,"height":32,"flippedX":false,"flippedY":false,"uid":"25971607_22","name":"Window","depth":0}),
FromInnSave: {"type":"Checkpoint","x":376,"y":160,"flippedX":false,"flippedY":false,"uid":"55940370_23","name":"FromInnSave","faceRight":false,"depth":0}
};
}
};

export const DesertOracleArgs = {
    width: 256,
height: 648,
gameObjectsSupplier: () => {
  return {
    Cobweb: resolveDecalGameObject({
    x: 32,
y: 158,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: Cobweb
}),
PotteryOrangeDamaged: resolveDecalGameObject({
    x: 64,
y: 482,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: PotteryOrangeDamaged
}),
PotteryOrange: resolveDecalGameObject({
    x: 32,
y: 617,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: PotteryOrange
}),
PotteryOrangeDamaged_1: resolveDecalGameObject({
    x: 104,
y: 618,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: PotteryOrangeDamaged
}),
PotteryOrange_1: resolveDecalGameObject({
    x: 126,
y: 612,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: PotteryOrange
}),
Cobweb_1: resolveDecalGameObject({
    x: 224,
y: 496,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: Cobweb
}),
OrnateCarpet: resolveDecalGameObject({
    x: 68,
y: 616,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: OrnateCarpet
}),
RoseVase: resolveDecalGameObject({
    x: 80,
y: 618,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: RoseVase
}),
CracksA: resolveDecalGameObject({
    x: 88,
y: 128,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CracksA
}),
CracksA_1: resolveDecalGameObject({
    x: 32,
y: 384,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CracksA
}),
CracksA_2: resolveDecalGameObject({
    x: 240,
y: 560,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CracksA
}),
GlowingCircle: resolveDecalGameObject({
    x: 188,
y: 0,
originX: 0.5,
originY: 0.5,
scaleX: 1.5,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: GlowingCircle
}),
Cobweb_2: resolveDecalGameObject({
    x: 124,
y: 212,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 3.141592653589793,
layerName: "BackgroundDecals",
texture: Cobweb
}),
RoseVase_1: resolveDecalGameObject({
    x: 116,
y: 212,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: RoseVase
}),
CloudLong: resolveDecalGameObject({
    x: 56,
y: 144,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_1: resolveDecalGameObject({
    x: 88,
y: 152,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_2: resolveDecalGameObject({
    x: 24,
y: 184,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_3: resolveDecalGameObject({
    x: 160,
y: 192,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_4: resolveDecalGameObject({
    x: 192,
y: 184,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_5: resolveDecalGameObject({
    x: 168,
y: 96,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":0,"y":0,"width":144,"height":112,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":0,"y":616,"width":256,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_1","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":0,"y":112,"width":24,"height":504,"flippedX":false,"flippedY":false,"uid":"55823268_2","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":232,"y":80,"width":32,"height":584,"flippedX":false,"flippedY":false,"uid":"55823268_3","name":"","depth":0}),
// @ts-ignore
Door: resolveDoor({"type":"Door","x":32,"y":200,"flippedX":false,"flippedY":false,"uid":"55913988_5","levelName":"DesertTown","checkpointName":"FromLeftHouse","name":"","depth":0}),
Player: {"type":"Player","x":80,"y":232,"flippedX":false,"flippedY":false,"uid":"55988047_6","faceRight":true,"name":"","depth":0},
// @ts-ignore
PipeLeft: resolvePipeLeft({"type":"PipeLeft","x":176,"y":144,"width":56,"height":40,"flippedX":false,"flippedY":false,"uid":"55866573_7","name":"","depth":0}),
// @ts-ignore
PipeHorizontal: resolvePipeHorizontal({"type":"PipeHorizontal","x":144,"y":144,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_8","visible":true,"name":"","depth":0}),
// @ts-ignore
PipeLeftEnd: resolvePipeLeftEnd({"type":"PipeLeftEnd","x":144,"y":144,"flippedX":false,"flippedY":false,"uid":"63428932_9","name":"","depth":0}),
// @ts-ignore
ValuableBlue: resolveValuableBlue({"type":"ValuableBlue","x":168,"y":144,"flippedX":false,"flippedY":false,"uid":"55991906_10","name":"","depth":0}),
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":104,"y":584,"width":128,"height":32,"flippedX":false,"flippedY":false,"uid":"55824435_11","name":"","depth":0}),
// @ts-ignore
PipeLeft_1: resolvePipeLeft({"type":"PipeLeft","x":112,"y":544,"width":104,"height":56,"flippedX":false,"flippedY":false,"uid":"55866573_12","name":"","depth":0}),
// @ts-ignore
PipeRight: resolvePipeRight({"type":"PipeRight","x":112,"y":472,"width":120,"height":72,"flippedX":false,"flippedY":false,"uid":"55859676_13","name":"","depth":0}),
// @ts-ignore
PipeLeft_2: resolvePipeLeft({"type":"PipeLeft","x":112,"y":400,"width":120,"height":72,"flippedX":false,"flippedY":false,"uid":"55866573_15","name":"","depth":0}),
// @ts-ignore
PipeRight_1: resolvePipeRight({"type":"PipeRight","x":112,"y":336,"width":120,"height":64,"flippedX":false,"flippedY":false,"uid":"55859676_16","name":"","depth":0}),
// @ts-ignore
PipeLeft_3: resolvePipeLeft({"type":"PipeLeft","x":168,"y":288,"width":64,"height":48,"flippedX":false,"flippedY":false,"uid":"55866573_17","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_1: resolvePipeHorizontal({"type":"PipeHorizontal","x":136,"y":288,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_19","visible":true,"name":"","depth":0}),
// @ts-ignore
PipeLeftEnd_1: resolvePipeLeftEnd({"type":"PipeLeftEnd","x":136,"y":288,"flippedX":false,"flippedY":false,"uid":"63428932_20","name":"","depth":0}),
// @ts-ignore
Oracle: resolveNpc({"type":"NpcIguana","x":48,"y":616,"flippedX":false,"flippedY":false,"uid":"26367058_21","name":"Oracle","style":0,"depth":0}),
// @ts-ignore
SlopeLeft: resolveSlopeLeft({"type":"SlopeLeft","x":24,"y":232,"width":96,"height":32,"flippedX":false,"flippedY":true,"uid":"55845599_22","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_2: resolvePipeHorizontal({"type":"PipeHorizontal","x":80,"y":400,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_23","visible":true,"name":"","depth":0}),
// @ts-ignore
PipeLeftEnd_2: resolvePipeLeftEnd({"type":"PipeLeftEnd","x":80,"y":400,"flippedX":false,"flippedY":false,"uid":"63428932_24","name":"","depth":0}),
// @ts-ignore
SlopeLeft_1: resolveSlopeLeft({"type":"SlopeLeft","x":24,"y":112,"width":64,"height":48,"flippedX":false,"flippedY":true,"uid":"55845599_25","name":"","depth":0}),
// @ts-ignore
SlopeLeft_2: resolveSlopeLeft({"type":"SlopeLeft","x":80,"y":480,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55845599_26","name":"","depth":0}),
// @ts-ignore
SlopeRight_1: resolveSlopeRight({"type":"SlopeRight","x":48,"y":480,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_27","name":"","depth":0}),
// @ts-ignore
SlopeRight_2: resolveSlopeRight({"type":"SlopeRight","x":200,"y":80,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_28","name":"","depth":0}),
// @ts-ignore
SlopeLeft_3: resolveSlopeLeft({"type":"SlopeLeft","x":144,"y":80,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55845599_29","name":"","depth":0}),
// @ts-ignore
Block_4: resolveBlock({"type":"Block","x":144,"y":0,"width":32,"height":80,"flippedX":false,"flippedY":false,"uid":"55823268_30","name":"","depth":0}),
// @ts-ignore
Block_5: resolveBlock({"type":"Block","x":200,"y":0,"width":56,"height":80,"flippedX":false,"flippedY":false,"uid":"55823268_31","name":"","depth":0}),
// @ts-ignore
Window1: resolveRegion({"type":"Region","x":72,"y":160,"width":24,"height":24,"flippedX":false,"flippedY":false,"uid":"25971607_32","name":"Window1","depth":0}),
// @ts-ignore
Window2: resolveRegion({"type":"Region","x":100,"y":160,"width":24,"height":24,"flippedX":false,"flippedY":false,"uid":"25971607_35","name":"Window2","depth":0}),
// @ts-ignore
Window3: resolveRegion({"type":"Region","x":72,"y":188,"width":24,"height":24,"flippedX":false,"flippedY":false,"uid":"25971607_36","name":"Window3","depth":0}),
// @ts-ignore
Window4: resolveRegion({"type":"Region","x":100,"y":188,"width":24,"height":24,"flippedX":false,"flippedY":false,"uid":"25971607_37","name":"Window4","depth":0})
};
}
};

export const DesertOutskirtsArgs = {
    width: 752,
height: 416,
gameObjectsSupplier: () => {
  return {
    Column: resolveDecalGameObject({
    x: 24,
y: 296,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Column
}),
Column_1: resolveDecalGameObject({
    x: 72,
y: 296,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Column
}),
SpikyBrushA: resolveDecalGameObject({
    x: 56,
y: 328,
originX: 0.5,
originY: 0.9,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushA
}),
SpikyBrushB: resolveDecalGameObject({
    x: 304,
y: 288,
originX: 0.5,
originY: 0.7,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
SpikyBrushA_1: resolveDecalGameObject({
    x: 112,
y: 192,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushA
}),
TempleUnlockBlob: resolveDecalGameObject({
    x: 328,
y: 120,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Anchor
}),
BushRight: resolveDecalGameObject({
    x: 336,
y: 122,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushA
}),
BushLeft: resolveDecalGameObject({
    x: 320,
y: 120,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
SpikyBrushA_2: resolveDecalGameObject({
    x: 440,
y: 320,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushA
}),
SpikyBrushA_3: resolveDecalGameObject({
    x: 440,
y: 264,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: -2.631174083493359,
layerName: "BackgroundDecals",
texture: SpikyBrushA
}),
SpikyBrushB_1: resolveDecalGameObject({
    x: 520,
y: 320,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
VBushRight: resolveDecalGameObject({
    x: 193,
y: 320,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
VBushLeft: resolveDecalGameObject({
    x: 171,
y: 319,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushA
}),
SpikyBrushA_4: resolveDecalGameObject({
    x: 689.8792460234883,
y: 146.41175695405192,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushA
}),
SpikyBrushB_2: resolveDecalGameObject({
    x: 600.1087478070684,
y: 145.9212077834704,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
CloudLong: resolveDecalGameObject({
    x: 72,
y: 96,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_1: resolveDecalGameObject({
    x: 112,
y: 104,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_2: resolveDecalGameObject({
    x: 216,
y: 224,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_3: resolveDecalGameObject({
    x: 312,
y: 152,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_4: resolveDecalGameObject({
    x: 248,
y: 72,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_5: resolveDecalGameObject({
    x: 560,
y: 48,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_6: resolveDecalGameObject({
    x: 640,
y: 96,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":0,"y":328,"width":368,"height":88,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":0,"y":200,"width":96,"height":64,"flippedX":false,"flippedY":false,"uid":"55823268_1","name":"","depth":0}),
Player: {"type":"Player","x":72,"y":328,"flippedX":false,"flippedY":false,"uid":"55988047_2","faceRight":true,"name":"","depth":0},
// @ts-ignore
SlopeLeft: resolveSlopeLeft({"type":"SlopeLeft","x":96,"y":200,"width":64,"height":64,"flippedX":false,"flippedY":true,"uid":"55845599_3","name":"","depth":0}),
// @ts-ignore
PipeHorizontal: resolvePipeHorizontal({"type":"PipeHorizontal","x":144,"y":200,"width":40,"flippedX":false,"flippedY":false,"uid":"55841307_4","visible":true,"name":"","depth":0}),
// @ts-ignore
PipeRightEnd: resolvePipeRightEnd({"type":"PipeRightEnd","x":184,"y":200,"flippedX":false,"flippedY":false,"uid":"63418353_5","name":"","depth":0}),
FromDigua: {"type":"Checkpoint","x":72,"y":200,"flippedX":false,"flippedY":false,"uid":"55940370_6","name":"FromDigua","faceRight":true,"depth":0},
// @ts-ignore
Gate: resolveGate({"type":"Gate","x":0,"y":168,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_7","levelName":"DesertField","checkpointName":"FromOutskirtsTop","name":"","depth":0}),
// @ts-ignore
Gate_1: resolveGate({"type":"Gate","x":0,"y":296,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_8","levelName":"DesertField","checkpointName":"FromOutskirtsBottom","name":"","depth":0}),
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":232,"y":296,"width":64,"height":32,"flippedX":false,"flippedY":false,"uid":"55824435_9","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":296,"y":296,"width":72,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_10","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_1: resolvePipeHorizontal({"type":"PipeHorizontal","x":288,"y":232,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_11","visible":true,"name":"","depth":0}),
// @ts-ignore
PipeRightEnd_1: resolvePipeRightEnd({"type":"PipeRightEnd","x":320,"y":232,"flippedX":false,"flippedY":false,"uid":"63418353_12","name":"","depth":0}),
// @ts-ignore
PipeLeftEnd: resolvePipeLeftEnd({"type":"PipeLeftEnd","x":288,"y":232,"flippedX":false,"flippedY":false,"uid":"63428932_13","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_2: resolvePipeHorizontal({"type":"PipeHorizontal","x":256,"y":128,"width":112,"flippedX":false,"flippedY":false,"uid":"55841307_19","visible":true,"name":"","depth":0}),
// @ts-ignore
PipeLeftEnd_1: resolvePipeLeftEnd({"type":"PipeLeftEnd","x":256,"y":128,"flippedX":false,"flippedY":false,"uid":"63428932_20","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":368,"y":0,"width":80,"height":176,"flippedX":false,"flippedY":false,"uid":"55823268_21","name":"","depth":0}),
// @ts-ignore
Boulder: resolveBoulder({"type":"Boulder","x":376,"y":284,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"15952797_22","name":"","depth":0}),
// @ts-ignore
Boulder_1: resolveBoulder({"type":"Boulder","x":392,"y":254,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"15952797_23","name":"","depth":0}),
// @ts-ignore
SlopeLeft_1: resolveSlopeLeft({"type":"SlopeLeft","x":368,"y":296,"width":72,"height":32,"flippedX":false,"flippedY":false,"uid":"55845599_24","name":"","depth":0}),
// @ts-ignore
SlopeRight_1: resolveSlopeRight({"type":"SlopeRight","x":408,"y":240,"width":72,"height":40,"flippedX":false,"flippedY":true,"uid":"55824435_25","name":"","depth":0}),
// @ts-ignore
Block_4: resolveBlock({"type":"Block","x":480,"y":240,"width":48,"height":40,"flippedX":false,"flippedY":false,"uid":"55823268_26","name":"","depth":0}),
// @ts-ignore
Block_5: resolveBlock({"type":"Block","x":368,"y":328,"width":160,"height":88,"flippedX":false,"flippedY":false,"uid":"55823268_27","name":"","depth":0}),
// @ts-ignore
Block_6: resolveBlock({"type":"Block","x":528,"y":240,"width":48,"height":176,"flippedX":false,"flippedY":false,"uid":"55823268_28","name":"","depth":0}),
// @ts-ignore
ValuableOrange: resolveValuableOrange({"type":"ValuableOrange","x":456,"y":328,"flippedX":false,"flippedY":false,"uid":"56004563_34","name":"","depth":0}),
// @ts-ignore
ValuableOrange_1: resolveValuableOrange({"type":"ValuableOrange","x":480,"y":328,"flippedX":false,"flippedY":false,"uid":"56004563_35","name":"","depth":0}),
// @ts-ignore
ValuableOrange_2: resolveValuableOrange({"type":"ValuableOrange","x":504,"y":328,"flippedX":false,"flippedY":false,"uid":"56004563_36","name":"","depth":0}),
// @ts-ignore
ValuableBlue: resolveValuableBlue({"type":"ValuableBlue","x":468,"y":318,"flippedX":false,"flippedY":false,"uid":"55991906_37","name":"","depth":0}),
// @ts-ignore
ValuableBlue_1: resolveValuableBlue({"type":"ValuableBlue","x":492,"y":318,"flippedX":false,"flippedY":false,"uid":"55991906_38","name":"","depth":0}),
// @ts-ignore
GrassyValuableBackground: resolveValuableOrange({"type":"ValuableOrange","x":184,"y":328,"flippedX":false,"flippedY":false,"uid":"56004563_39","name":"GrassyValuableBackground","depth":3}),
// @ts-ignore
BushValuableRegion: resolveRegion({"type":"Region","x":160,"y":312,"width":40,"height":16,"flippedX":false,"flippedY":false,"uid":"25971607_40","name":"BushValuableRegion","depth":0}),
// @ts-ignore
Block_7: resolveBlock({"type":"Block","x":368,"y":192,"width":208,"height":48,"flippedX":false,"flippedY":false,"uid":"55823268_41","name":"","depth":0}),
// @ts-ignore
FakeWall: resolveFakeWall({"type":"FakeWall","x":368,"y":176,"width":152,"height":16,"flippedX":false,"flippedY":false,"uid":"02672398_42","name":"","depth":0}),
// @ts-ignore
Block_8: resolveBlock({"type":"Block","x":520,"y":176,"width":56,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_43","name":"","depth":0}),
// @ts-ignore
FakeWall_1: resolveFakeWall({"type":"FakeWall","x":448,"y":104,"width":24,"height":72,"flippedX":false,"flippedY":false,"uid":"02672398_45","name":"","depth":0}),
// @ts-ignore
FakeWall_2: resolveFakeWall({"type":"FakeWall","x":472,"y":104,"width":104,"height":16,"flippedX":false,"flippedY":false,"uid":"02672398_46","name":"","depth":0}),
// @ts-ignore
Block_9: resolveBlock({"type":"Block","x":472,"y":120,"width":104,"height":56,"flippedX":false,"flippedY":false,"uid":"55823268_47","name":"","depth":0}),
// @ts-ignore
Block_10: resolveBlock({"type":"Block","x":448,"y":0,"width":128,"height":104,"flippedX":false,"flippedY":false,"uid":"55823268_48","name":"","depth":0}),
// @ts-ignore
Block_11: resolveBlock({"type":"Block","x":576,"y":152,"width":144,"height":264,"flippedX":false,"flippedY":false,"uid":"55823268_49","name":"","depth":0}),
// @ts-ignore
Stump: resolveTreeStump({"type":"TreeStump","x":648,"y":152,"flippedX":false,"flippedY":false,"uid":"77429484_50","levelName":"GiantsTown","checkpointName":"Stump","name":"Stump","depth":0,"faceRight":false}),
// @ts-ignore
Block_12: resolveBlock({"type":"Block","x":720,"y":0,"width":32,"height":416,"flippedX":false,"flippedY":false,"uid":"55823268_51","name":"","depth":0}),
// @ts-ignore
ValuableBlue_2: resolveValuableBlue({"type":"ValuableBlue","x":632,"y":72,"flippedX":false,"flippedY":false,"uid":"55991906_52","name":"","depth":0}),
// @ts-ignore
ValuableOrange_3: resolveValuableOrange({"type":"ValuableOrange","x":664,"y":72,"flippedX":false,"flippedY":false,"uid":"56004563_53","name":"","depth":0})
};
}
};

export const DesertShopArgs = {
    width: 496,
height: 256,
gameObjectsSupplier: () => {
  return {
    WoodenStool: resolveDecalGameObject({
    x: 380,
y: 221,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: WoodenStool
}),
CocktailGlass: resolveDecalGameObject({
    x: 376,
y: 217,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: CocktailGlass
}),
DinerTable: resolveDecalGameObject({
    x: 224,
y: 224,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: DinerTable
}),
DinerTable_1: resolveDecalGameObject({
    x: 312,
y: 224,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: DinerTable
}),
DiguaGlass: resolveDecalGameObject({
    x: 216,
y: 216,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: CocktailGlass
}),
WhiskeyGlass: resolveDecalGameObject({
    x: 232,
y: 216,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: WhiskeyGlass
}),
CrateWooden: resolveDecalGameObject({
    x: 432,
y: 200,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CrateWooden
}),
CrateWooden_1: resolveDecalGameObject({
    x: 440,
y: 176,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CrateWooden
}),
Cobweb: resolveDecalGameObject({
    x: 456,
y: 208,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Cobweb
}),
Cobweb_1: resolveDecalGameObject({
    x: 456,
y: 168,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 3.141592653589793,
layerName: "BackgroundDecals",
texture: Cobweb
}),
Bottle1: resolveDecalGameObject({
    x: 440,
y: 176,
originX: 0,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Bottle1
}),
Bottle1_1: resolveDecalGameObject({
    x: 456,
y: 224,
originX: 0,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Bottle1
}),
Bottle2: resolveDecalGameObject({
    x: 436,
y: 200,
originX: 0,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Bottle2
}),
Bottle2_1: resolveDecalGameObject({
    x: 340,
y: 216,
originX: 0,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 1.8849555921538759,
layerName: "BackgroundDecals",
texture: Bottle2
}),
CracksA: resolveDecalGameObject({
    x: 152,
y: 72,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CracksA
}),
CracksA_1: resolveDecalGameObject({
    x: 160,
y: 134,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0.7853981633974483,
layerName: "BackgroundDecals",
texture: CracksA
}),
Cobweb_2: resolveDecalGameObject({
    x: 248,
y: 49,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Cobweb
}),
Cobweb_3: resolveDecalGameObject({
    x: 230,
y: 38,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Cobweb
}),
DontPoster: resolveDecalGameObject({
    x: 400,
y: 184,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: DontPoster
}),
GreenCable: resolveDecalGameObject({
    x: 196,
y: 120,
originX: 0,
originY: 0,
scaleX: 20,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: GreenCable
}),
PaSpeaker: resolveDecalGameObject({
    x: 200,
y: 127,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: PaSpeaker
}),
PaSpeaker_1: resolveDecalGameObject({
    x: 336,
y: 127,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: PaSpeaker
}),
CloudLong: resolveDecalGameObject({
    x: 48,
y: 88,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_1: resolveDecalGameObject({
    x: 88,
y: 96,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_2: resolveDecalGameObject({
    x: 120,
y: 128,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
// @ts-ignore
Door: resolveDoor({"type":"Door","x":48,"y":192,"flippedX":false,"flippedY":false,"uid":"55913988_0","levelName":"DesertTown","checkpointName":"FromShop","name":"","depth":0}),
// @ts-ignore
Floor: resolveBlock({"type":"Block","x":0,"y":224,"width":496,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_1","name":"Floor","depth":0}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":0,"y":0,"width":32,"height":224,"flippedX":false,"flippedY":false,"uid":"55823268_2","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":32,"y":0,"width":432,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_3","name":"","depth":0}),
Player: {"type":"Player","x":96,"y":224,"flippedX":false,"flippedY":false,"uid":"55988047_4","faceRight":true,"name":"","depth":0},
// @ts-ignore
Shopkeeper: resolveNpc({"type":"NpcIguana","x":408,"y":224,"flippedX":true,"flippedY":false,"uid":"26367058_5","name":"Shopkeeper","style":5,"depth":0}),
// @ts-ignore
SlopeLeft: resolveSlopeLeft({"type":"SlopeLeft","x":112,"y":32,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55845599_17","name":"","depth":0}),
// @ts-ignore
SlopeLeft_1: resolveSlopeLeft({"type":"SlopeLeft","x":304,"y":32,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55845599_18","name":"","depth":0}),
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":240,"y":32,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_19","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":272,"y":32,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_20","name":"","depth":0}),
// @ts-ignore
SlopeRight_1: resolveSlopeRight({"type":"SlopeRight","x":432,"y":32,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_21","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":464,"y":0,"width":32,"height":224,"flippedX":false,"flippedY":false,"uid":"55823268_24","name":"","depth":0}),
ShopLamp: {"type":"Anchor","x":376,"y":160,"flippedX":false,"flippedY":false,"uid":"25979726_25","name":"ShopLamp","depth":0},
MiddleLamp: {"type":"Anchor","x":264,"y":144,"flippedX":false,"flippedY":false,"uid":"25979726_26","name":"MiddleLamp","depth":0},
// @ts-ignore
PipeHorizontal: resolvePipeHorizontal({"type":"PipeHorizontal","x":440,"y":176,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_28","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_1: resolvePipeHorizontal({"type":"PipeHorizontal","x":432,"y":200,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_29","visible":false,"name":"","depth":0}),
// @ts-ignore
ValuableBlue: resolveValuableBlue({"type":"ValuableBlue","x":240,"y":56,"flippedX":false,"flippedY":false,"uid":"55991906_32","name":"","depth":0}),
// @ts-ignore
BarAttendee: resolveNpc({"type":"NpcIguana","x":264,"y":224,"flippedX":true,"flippedY":false,"uid":"26367058_33","name":"BarAttendee","style":6,"depth":0}),
// @ts-ignore
Block_4: resolveBlock({"type":"Block","x":32,"y":32,"width":80,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_34","name":"","depth":0}),
// @ts-ignore
Digua: resolveNpc({"type":"NpcIguana","x":184,"y":224,"flippedX":false,"flippedY":false,"uid":"26367058_35","name":"Digua","style":4,"depth":0}),
// @ts-ignore
PipeHorizontal_2: resolvePipeHorizontal({"type":"PipeHorizontal","x":296,"y":216,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_36","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_3: resolvePipeHorizontal({"type":"PipeHorizontal","x":208,"y":216,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_37","visible":false,"name":"","depth":0}),
// @ts-ignore
Window1: resolveRegion({"type":"Region","x":38,"y":70,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"25971607_38","name":"Window1","depth":0}),
// @ts-ignore
Window2: resolveRegion({"type":"Region","x":74,"y":70,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"25971607_39","name":"Window2","depth":0}),
// @ts-ignore
Window3: resolveRegion({"type":"Region","x":38,"y":106,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"25971607_40","name":"Window3","depth":0}),
// @ts-ignore
Window4: resolveRegion({"type":"Region","x":74,"y":106,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"25971607_41","name":"Window4","depth":0})
};
}
};

export const DesertTempleArgs = {
    width: 512,
height: 256,
gameObjectsSupplier: () => {
  return {
    Key1: resolveDecalGameObject({
    x: 208,
y: 176,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: KeyRed
}),
Key2: resolveDecalGameObject({
    x: 288,
y: 176,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: KeyRed
}),
Key3: resolveDecalGameObject({
    x: 368,
y: 176,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: KeyRed
}),
Cobweb: resolveDecalGameObject({
    x: 32,
y: 160,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Cobweb
}),
Cobweb_1: resolveDecalGameObject({
    x: 480,
y: 160,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Cobweb
}),
CracksA: resolveDecalGameObject({
    x: 248,
y: 168,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CracksA
}),
CracksA_1: resolveDecalGameObject({
    x: 304,
y: 64,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CracksA
}),
Column: resolveDecalGameObject({
    x: 152,
y: 224,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1.125,
rotation: 0,
layerName: "BackgroundDecals",
texture: Column
}),
Column_1: resolveDecalGameObject({
    x: 424,
y: 224,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1.125,
rotation: 0,
layerName: "BackgroundDecals",
texture: Column
}),
GlowingCircle: resolveDecalGameObject({
    x: 288,
y: -12,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1.75,
rotation: 0,
layerName: "BackgroundDecals",
texture: GlowingCircle
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":0,"y":224,"width":512,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
// @ts-ignore
Door: resolveDoor({"type":"Door","x":32,"y":192,"flippedX":false,"flippedY":false,"uid":"55913988_1","levelName":"DesertField","checkpointName":"FromTemple","name":"","depth":0}),
// @ts-ignore
Door1: resolveDoor({"type":"Door","x":192,"y":192,"flippedX":false,"flippedY":false,"uid":"55913988_2","levelName":"UnrealFlight","checkpointName":"","name":"Door1","depth":0}),
// @ts-ignore
Door2: resolveDoor({"type":"Door","x":272,"y":192,"flippedX":false,"flippedY":false,"uid":"55913988_3","levelName":"UnrealMimic","checkpointName":"","name":"Door2","depth":0}),
// @ts-ignore
Door3: resolveDoor({"type":"Door","x":352,"y":192,"flippedX":false,"flippedY":false,"uid":"55913988_4","levelName":"UnrealSnowman","checkpointName":"","name":"Door3","depth":0}),
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":296,"y":0,"width":40,"height":152,"flippedX":false,"flippedY":true,"uid":"55824435_5","name":"","depth":0}),
// @ts-ignore
SlopeLeft: resolveSlopeLeft({"type":"SlopeLeft","x":240,"y":0,"width":40,"height":152,"flippedX":false,"flippedY":true,"uid":"55845599_6","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":336,"y":0,"width":176,"height":152,"flippedX":false,"flippedY":false,"uid":"55823268_7","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":0,"y":0,"width":240,"height":152,"flippedX":false,"flippedY":false,"uid":"55823268_8","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":0,"y":152,"width":24,"height":72,"flippedX":false,"flippedY":false,"uid":"55823268_9","name":"","depth":0}),
// @ts-ignore
Block_4: resolveBlock({"type":"Block","x":488,"y":152,"width":24,"height":72,"flippedX":false,"flippedY":false,"uid":"55823268_10","name":"","depth":0}),
Player: {"type":"Player","x":80,"y":224,"flippedX":false,"flippedY":false,"uid":"55988047_11","faceRight":true,"name":"","depth":0},
// @ts-ignore
Sign: resolveSign({"type":"Sign","x":128,"y":224,"flippedX":false,"flippedY":false,"uid":"86706091_12","title":"Big Key","message":"","name":"","depth":0}),
// @ts-ignore
BigKey: resolveRegion({"type":"Region","x":263,"y":104,"width":50,"height":28,"flippedX":false,"flippedY":false,"uid":"25971607_13","name":"BigKey","depth":0})
};
}
};

export const DesertTownArgs = {
    width: 2040,
height: 568,
gameObjectsSupplier: () => {
  return {
    LeftHouse: resolveDecalGameObject({
    x: 816,
y: 344,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CrudeHouseB
}),
RightHouse: resolveDecalGameObject({
    x: 1288,
y: 440,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CrudeHouse
}),
SpikyBrushA: resolveDecalGameObject({
    x: 768,
y: 344,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushA
}),
SpikyBrushA_1: resolveDecalGameObject({
    x: 796,
y: 259,
originX: 0.5,
originY: 1,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushA
}),
SpikyBrushB: resolveDecalGameObject({
    x: 1072,
y: 396,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
SpikyBrushB_1: resolveDecalGameObject({
    x: 1044,
y: 394,
originX: 0.5,
originY: 1,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
SpikyBrushA_2: resolveDecalGameObject({
    x: 1320,
y: 440,
originX: 0.5,
originY: 1,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushA
}),
SpikyBrushB_2: resolveDecalGameObject({
    x: 1336,
y: 440,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
Crate9: resolveDecalGameObject({
    x: 1708,
y: 384,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CrateWooden
}),
Crate8: resolveDecalGameObject({
    x: 1736,
y: 384,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CrateWooden
}),
Crate6: resolveDecalGameObject({
    x: 1766,
y: 384,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CrateWooden
}),
Crate4: resolveDecalGameObject({
    x: 1794,
y: 384,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CrateWooden
}),
Crate7: resolveDecalGameObject({
    x: 1722,
y: 360,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CrateWooden
}),
Crate3: resolveDecalGameObject({
    x: 1780,
y: 360,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CrateWooden
}),
Crate5: resolveDecalGameObject({
    x: 1751,
y: 360,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CrateWooden
}),
Crate2: resolveDecalGameObject({
    x: 1736,
y: 336,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CrateWooden
}),
Crate1: resolveDecalGameObject({
    x: 1766,
y: 336,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CrateWooden
}),
Crate0: resolveDecalGameObject({
    x: 1751,
y: 312,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CrateWooden
}),
SpikyBrushA_3: resolveDecalGameObject({
    x: 1696,
y: 400,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushA
}),
SpikyBrushB_3: resolveDecalGameObject({
    x: 1824,
y: 400,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
SpikyBrushB_4: resolveDecalGameObject({
    x: 1536,
y: 424,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: -0.17453292519943295,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
InnBuilding: resolveDecalGameObject({
    x: 616,
y: 376,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CrudeHouseC
}),
BarBuilding: resolveDecalGameObject({
    x: 400,
y: 376,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CrudeHouse
}),
SpikyBrushA_4: resolveDecalGameObject({
    x: 476,
y: 379,
originX: 0.5,
originY: 1,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushA
}),
SpikyBrushB_5: resolveDecalGameObject({
    x: 672,
y: 380,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
SpikyBrushB_6: resolveDecalGameObject({
    x: 368,
y: 332,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
SignInn: resolveDecalGameObject({
    x: 584,
y: 334,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SignInn
}),
SignTavern: resolveDecalGameObject({
    x: 440,
y: 336,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SignTavern
}),
DigKey: resolveDecalGameObject({
    x: 208,
y: 416,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: KeyRed
}),
SpikyBrushA_5: resolveDecalGameObject({
    x: 48,
y: 368,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushA
}),
SpikyBrushB_7: resolveDecalGameObject({
    x: 56,
y: 296,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 1.5762825345220057,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
CrateStackKey: resolveDecalGameObject({
    x: 1280,
y: 79,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: KeyRed
}),
CloudLong: resolveDecalGameObject({
    x: 648,
y: 272,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_1: resolveDecalGameObject({
    x: 752,
y: 224,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_2: resolveDecalGameObject({
    x: 940,
y: 262,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_3: resolveDecalGameObject({
    x: 904,
y: 256,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_4: resolveDecalGameObject({
    x: 1152,
y: 288,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_5: resolveDecalGameObject({
    x: 1412,
y: 311,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_6: resolveDecalGameObject({
    x: 1384,
y: 304,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_7: resolveDecalGameObject({
    x: 1596,
y: 319,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_8: resolveDecalGameObject({
    x: 1636,
y: 327,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_9: resolveDecalGameObject({
    x: 1508,
y: 247,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_10: resolveDecalGameObject({
    x: 1828,
y: 295,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_11: resolveDecalGameObject({
    x: 1860,
y: 303,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_12: resolveDecalGameObject({
    x: 352,
y: 280,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_13: resolveDecalGameObject({
    x: 380,
y: 286,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_14: resolveDecalGameObject({
    x: 512,
y: 248,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_15: resolveDecalGameObject({
    x: 216,
y: 224,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_16: resolveDecalGameObject({
    x: 144,
y: 272,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_17: resolveDecalGameObject({
    x: 112,
y: 280,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_18: resolveDecalGameObject({
    x: 2032,
y: 272,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_19: resolveDecalGameObject({
    x: 1336,
y: 208,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_20: resolveDecalGameObject({
    x: 1248,
y: 128,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_21: resolveDecalGameObject({
    x: 1440,
y: 160,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":0,"y":376,"width":184,"height":192,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":680,"y":344,"width":72,"height":32,"flippedX":false,"flippedY":false,"uid":"55824435_1","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":752,"y":344,"width":128,"height":48,"flippedX":false,"flippedY":false,"uid":"55823268_2","name":"","depth":0}),
// @ts-ignore
SlopeLeft: resolveSlopeLeft({"type":"SlopeLeft","x":880,"y":344,"width":72,"height":48,"flippedX":false,"flippedY":false,"uid":"55845599_3","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":952,"y":392,"width":136,"height":176,"flippedX":false,"flippedY":false,"uid":"55823268_4","name":"","depth":0}),
// @ts-ignore
SlopeLeft_1: resolveSlopeLeft({"type":"SlopeLeft","x":1088,"y":392,"width":96,"height":48,"flippedX":false,"flippedY":false,"uid":"55845599_5","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":1184,"y":440,"width":424,"height":136,"flippedX":false,"flippedY":false,"uid":"55823268_6","name":"","depth":0}),
// @ts-ignore
Block_4: resolveBlock({"type":"Block","x":1088,"y":440,"width":96,"height":128,"flippedX":false,"flippedY":false,"uid":"55823268_7","name":"","depth":0}),
// @ts-ignore
Block_5: resolveBlock({"type":"Block","x":752,"y":392,"width":200,"height":176,"flippedX":false,"flippedY":false,"uid":"55823268_8","name":"","depth":0}),
// @ts-ignore
LeftHouseDoor: resolveDoor({"type":"Door","x":832,"y":312,"flippedX":false,"flippedY":false,"uid":"55913988_9","levelName":"DesertOracle","checkpointName":"","name":"LeftHouseDoor","depth":0}),
// @ts-ignore
RightHouseDoor: resolveDoor({"type":"Door","x":1256,"y":408,"flippedX":false,"flippedY":false,"uid":"55913988_10","levelName":"DesertCostumer","checkpointName":"","name":"RightHouseDoor","depth":0}),
Player: {"type":"Player","x":984,"y":392,"flippedX":false,"flippedY":false,"uid":"55988047_11","faceRight":false,"name":"","depth":0},
// @ts-ignore
Sign: resolveSign({"type":"Sign","x":1056,"y":392,"flippedX":false,"flippedY":false,"uid":"86706091_12","title":"Town","message":"Welcome to the desert town.","name":"","depth":0}),
FromLeftHouse: {"type":"Checkpoint","x":876,"y":344,"flippedX":false,"flippedY":false,"uid":"55940370_13","name":"FromLeftHouse","faceRight":true,"depth":0},
// @ts-ignore
SlopeRight_1: resolveSlopeRight({"type":"SlopeRight","x":1512,"y":408,"width":96,"height":32,"flippedX":false,"flippedY":false,"uid":"55824435_14","name":"","depth":0}),
// @ts-ignore
Block_6: resolveBlock({"type":"Block","x":1608,"y":408,"width":432,"height":160,"flippedX":false,"flippedY":false,"uid":"55823268_15","name":"","depth":0}),
// @ts-ignore
Stacker: resolveNpc({"type":"NpcIguana","x":1624,"y":408,"flippedX":false,"flippedY":false,"uid":"26367058_17","name":"Stacker","style":1,"depth":0}),
// @ts-ignore
PickupCratesRegion: resolveRegion({"type":"Region","x":1712,"y":392,"width":104,"height":16,"flippedX":false,"flippedY":false,"uid":"25971607_18","name":"PickupCratesRegion","depth":0}),
DropCrateAnchor: {"type":"Anchor","x":1384,"y":416,"flippedX":false,"flippedY":false,"uid":"25979726_20","name":"DropCrateAnchor","depth":0},
// @ts-ignore
DropCrateRegion: resolveRegion({"type":"Region","x":1376,"y":424,"width":40,"height":16,"flippedX":false,"flippedY":false,"uid":"25971607_21","name":"DropCrateRegion","depth":0}),
// @ts-ignore
InnDoor: resolveDoor({"type":"Door","x":568,"y":344,"flippedX":false,"flippedY":false,"uid":"55913988_23","levelName":"DesertInn","checkpointName":"","name":"InnDoor","depth":0}),
// @ts-ignore
BarDoor: resolveDoor({"type":"Door","x":424,"y":344,"flippedX":false,"flippedY":false,"uid":"55913988_26","levelName":"DesertShop","checkpointName":"","name":"BarDoor","depth":0}),
FromInn: {"type":"Checkpoint","x":552,"y":376,"flippedX":false,"flippedY":false,"uid":"55940370_27","name":"FromInn","faceRight":false,"depth":0},
// @ts-ignore
Gate: resolveGate({"type":"Gate","x":2008,"y":376,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_28","levelName":"DesertField","checkpointName":"FromTown","name":"","depth":0}),
FromField: {"type":"Checkpoint","x":1960,"y":408,"flippedX":false,"flippedY":false,"uid":"55940370_29","name":"FromField","faceRight":false,"depth":0},
// @ts-ignore
PipeHorizontal: resolvePipeHorizontal({"type":"PipeHorizontal","x":415,"y":296,"width":40,"flippedX":false,"flippedY":false,"uid":"55841307_30","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_1: resolvePipeHorizontal({"type":"PipeHorizontal","x":359,"y":326,"width":56,"flippedX":false,"flippedY":false,"uid":"55841307_31","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_2: resolvePipeHorizontal({"type":"PipeHorizontal","x":571,"y":323,"width":42,"flippedX":false,"flippedY":false,"uid":"55841307_32","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_3: resolvePipeHorizontal({"type":"PipeHorizontal","x":611,"y":289,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_33","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_4: resolvePipeHorizontal({"type":"PipeHorizontal","x":758,"y":321,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_34","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_5: resolvePipeHorizontal({"type":"PipeHorizontal","x":813,"y":292,"width":48,"flippedX":false,"flippedY":false,"uid":"55841307_35","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_6: resolvePipeHorizontal({"type":"PipeHorizontal","x":782,"y":258,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_36","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_7: resolvePipeHorizontal({"type":"PipeHorizontal","x":1246,"y":390,"width":56,"flippedX":false,"flippedY":false,"uid":"55841307_37","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_8: resolvePipeHorizontal({"type":"PipeHorizontal","x":1302,"y":360,"width":40,"flippedX":false,"flippedY":false,"uid":"55841307_38","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_9: resolvePipeHorizontal({"type":"PipeHorizontal","x":639,"y":349,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_39","visible":false,"name":"","depth":0}),
// @ts-ignore
Block_7: resolveBlock({"type":"Block","x":304,"y":376,"width":448,"height":192,"flippedX":false,"flippedY":false,"uid":"55823268_40","name":"","depth":0}),
// @ts-ignore
Dig1: resolveBlock({"type":"Block","x":232,"y":376,"width":16,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_41","name":"Dig1","depth":0}),
// @ts-ignore
Dig2: resolveBlock({"type":"Block","x":216,"y":376,"width":16,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_42","name":"Dig2","depth":0}),
// @ts-ignore
Dig5: resolveBlock({"type":"Block","x":216,"y":392,"width":16,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_43","name":"Dig5","depth":0}),
// @ts-ignore
Dig6: resolveBlock({"type":"Block","x":200,"y":392,"width":16,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_44","name":"Dig6","depth":0}),
// @ts-ignore
Dig3: resolveBlock({"type":"Block","x":200,"y":376,"width":16,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_45","name":"Dig3","depth":0}),
// @ts-ignore
Dig4: resolveBlock({"type":"Block","x":184,"y":376,"width":16,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_46","name":"Dig4","depth":0}),
// @ts-ignore
Dig6_1: resolveBlock({"type":"Block","x":184,"y":392,"width":16,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_47","name":"Dig6","depth":0}),
// @ts-ignore
Block_8: resolveBlock({"type":"Block","x":184,"y":424,"width":120,"height":144,"flippedX":false,"flippedY":false,"uid":"55823268_48","name":"","depth":0}),
// @ts-ignore
Block_9: resolveBlock({"type":"Block","x":248,"y":376,"width":56,"height":48,"flippedX":false,"flippedY":false,"uid":"55823268_49","name":"","depth":0}),
// @ts-ignore
Block_10: resolveBlock({"type":"Block","x":232,"y":392,"width":16,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_50","name":"","depth":0}),
// @ts-ignore
StartDigging: resolveRegion({"type":"Region","x":168,"y":304,"width":64,"height":72,"flippedX":false,"flippedY":false,"uid":"25971607_51","name":"StartDigging","depth":0}),
// @ts-ignore
Boulder: resolveBoulder({"type":"Boulder","x":72,"y":364,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"15952797_52","name":"","depth":0}),
// @ts-ignore
Boulder_1: resolveBoulder({"type":"Boulder","x":48,"y":340,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"15952797_53","name":"","depth":0}),
// @ts-ignore
Block_11: resolveBlock({"type":"Block","x":0,"y":136,"width":48,"height":192,"flippedX":false,"flippedY":false,"uid":"55823268_55","name":"","depth":0}),
FromShop: {"type":"Checkpoint","x":472,"y":376,"flippedX":false,"flippedY":false,"uid":"55940370_56","name":"FromShop","faceRight":true,"depth":0},
// @ts-ignore
ValuableBlue: resolveValuableBlue({"type":"ValuableBlue","x":1348,"y":130,"flippedX":false,"flippedY":false,"uid":"55991906_57","name":"","depth":0}),
// @ts-ignore
Block_12: resolveBlock({"type":"Block","x":0,"y":0,"width":48,"height":136,"flippedX":false,"flippedY":false,"uid":"55823268_58","name":"","depth":0}),
Tumbleweed1: {"type":"Anchor","x":320,"y":344,"flippedX":false,"flippedY":false,"uid":"25979726_59","name":"Tumbleweed1","depth":0},
Tumbleweed2: {"type":"Anchor","x":1464,"y":408,"flippedX":false,"flippedY":false,"uid":"25979726_60","name":"Tumbleweed2","depth":0},
// @ts-ignore
Gate_1: resolveGate({"type":"Gate","x":-16,"y":344,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_61","levelName":"OversizedAngelArena","checkpointName":"FromDesert","name":"","depth":0}),
FromArena: {"type":"Checkpoint","x":56,"y":376,"flippedX":false,"flippedY":false,"uid":"55940370_62","name":"FromArena","faceRight":true,"depth":0},
FromCostumer: {"type":"Checkpoint","x":1240,"y":440,"flippedX":false,"flippedY":false,"uid":"55940370_63","name":"FromCostumer","faceRight":false,"depth":0},
FromGiants: {"type":"Checkpoint","x":992,"y":32,"flippedX":false,"flippedY":false,"uid":"55940370_64","name":"FromGiants","faceRight":true,"depth":0}
};
}
};

export const GiantsRestaurantArgs = {
    width: 256,
height: 256,
gameObjectsSupplier: () => {
  return {
    GiantsFoodStash: resolveDecalGameObject({
    x: 192,
y: -16,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GiantsFoodStash
}),
GiantsDinerTable: resolveDecalGameObject({
    x: 168,
y: 183,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GiantsDinerTable
}),
OrnateCarpet: resolveDecalGameObject({
    x: 48,
y: 192,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: OrnateCarpet
}),
PotteryOrangeDamaged: resolveDecalGameObject({
    x: 226,
y: 194,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: PotteryOrangeDamaged
}),
LightShelf: resolveDecalGameObject({
    x: 40,
y: 112,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: LightShelf
}),
RoseVase: resolveDecalGameObject({
    x: 32,
y: 102,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: RoseVase
}),
CloudLong: resolveDecalGameObject({
    x: 24,
y: 88,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CloudLong
}),
CloudLong_1: resolveDecalGameObject({
    x: 64,
y: 136,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CloudLong
}),
CloudLong_2: resolveDecalGameObject({
    x: 144,
y: 96,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CloudLong
}),
CloudLong_3: resolveDecalGameObject({
    x: 240,
y: 152,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CloudLong
}),
CloudLong_4: resolveDecalGameObject({
    x: 240,
y: 72,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CloudLong
}),
CloudLong_5: resolveDecalGameObject({
    x: 152,
y: 168,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CloudLong
}),
CloudLong_6: resolveDecalGameObject({
    x: 32,
y: 190,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CloudLong
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":0,"y":0,"width":256,"height":64,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":0,"y":192,"width":256,"height":64,"flippedX":false,"flippedY":false,"uid":"55823268_1","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":0,"y":64,"width":16,"height":128,"flippedX":false,"flippedY":false,"uid":"55823268_2","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":240,"y":64,"width":16,"height":128,"flippedX":false,"flippedY":false,"uid":"55823268_3","name":"","depth":0}),
// @ts-ignore
Door: resolveDoor({"type":"Door","x":32,"y":160,"flippedX":false,"flippedY":false,"uid":"55913988_4","levelName":"GiantsTown","checkpointName":"FromRestaurant","name":"","depth":0}),
Player: {"type":"Player","x":84,"y":192,"flippedX":false,"flippedY":false,"uid":"55988047_5","faceRight":true,"name":"","depth":0},
Salad: {"type":"Anchor","x":192,"y":166,"flippedX":false,"flippedY":false,"uid":"25979726_6","name":"Salad","depth":0},
// @ts-ignore
PipeHorizontal: resolvePipeHorizontal({"type":"PipeHorizontal","x":124,"y":172,"width":88,"flippedX":false,"flippedY":false,"uid":"55841307_7","visible":false,"name":"","depth":0}),
// @ts-ignore
MirrorRegion: resolveRegion({"type":"Region","x":64,"y":80,"width":72,"height":72,"flippedX":false,"flippedY":false,"uid":"25971607_8","name":"MirrorRegion","depth":0}),
// @ts-ignore
PipeHorizontal_1: resolvePipeHorizontal({"type":"PipeHorizontal","x":26,"y":108,"width":28,"flippedX":false,"flippedY":false,"uid":"55841307_9","visible":false,"name":"","depth":0})
};
}
};

export const GiantsTownArgs = {
    width: 808,
height: 400,
gameObjectsSupplier: () => {
  return {
    Obelisk: resolveDecalGameObject({
    x: 600,
y: 314,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: Obelisk
}),
Obelisk_1: resolveDecalGameObject({
    x: 136,
y: 314,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: Obelisk
}),
GiantsExterior: resolveDecalGameObject({
    x: 405,
y: 312,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: GiantsExterior
}),
CloudLong: resolveDecalGameObject({
    x: 608,
y: 240,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_1: resolveDecalGameObject({
    x: 336,
y: 152,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_2: resolveDecalGameObject({
    x: 304,
y: 160,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_3: resolveDecalGameObject({
    x: 64,
y: 256,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_4: resolveDecalGameObject({
    x: 131.04306806967375,
y: 293.73380685317545,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_5: resolveDecalGameObject({
    x: 702.0103046648869,
y: 121.85991227164678,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_6: resolveDecalGameObject({
    x: 510.0103046648869,
y: 41.85991227164678,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_7: resolveDecalGameObject({
    x: 814.0103046648869,
y: 289.85991227164675,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":616,"y":88,"width":48,"height":24,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
// @ts-ignore
Stump: resolveTreeStump({"type":"TreeStump","x":672,"y":88,"flippedX":false,"flippedY":false,"uid":"77429484_1","levelName":"DesertOutskirts","checkpointName":"Stump","name":"Stump","depth":0,"faceRight":false}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":600,"y":96,"width":16,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_2","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":736,"y":96,"width":16,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_3","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":680,"y":136,"width":40,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_4","name":"","depth":0}),
// @ts-ignore
Block_4: resolveBlock({"type":"Block","x":664,"y":88,"width":72,"height":56,"flippedX":false,"flippedY":false,"uid":"55823268_5","name":"","depth":0}),
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":608,"y":112,"width":72,"height":24,"flippedX":false,"flippedY":true,"uid":"55824435_6","name":"","depth":0}),
// @ts-ignore
SlopeRight_1: resolveSlopeRight({"type":"SlopeRight","x":632,"y":112,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_8","name":"","depth":0}),
// @ts-ignore
Block_5: resolveBlock({"type":"Block","x":136,"y":312,"width":472,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_9","name":"","depth":0}),
// @ts-ignore
GreeterBigua: resolveBigua({"type":"Bigua","x":496,"y":312,"flippedX":false,"flippedY":false,"uid":"47268149_10","style":1,"name":"GreeterBigua","depth":0}),
// @ts-ignore
FarBigua: resolveBigua({"type":"Bigua","x":248,"y":304,"flippedX":true,"flippedY":false,"uid":"47268149_11","style":2,"name":"FarBigua","depth":0}),
Player: {"type":"Player","x":712,"y":88,"flippedX":false,"flippedY":false,"uid":"55988047_12","faceRight":false,"name":"","depth":0},
// @ts-ignore
Block_6: resolveBlock({"type":"Block","x":200,"y":320,"width":48,"height":24,"flippedX":false,"flippedY":false,"uid":"55823268_13","name":"","depth":0}),
// @ts-ignore
Block_7: resolveBlock({"type":"Block","x":328,"y":320,"width":16,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_14","name":"","depth":0}),
// @ts-ignore
Block_8: resolveBlock({"type":"Block","x":408,"y":320,"width":32,"height":24,"flippedX":false,"flippedY":false,"uid":"55823268_15","name":"","depth":0}),
// @ts-ignore
Block_9: resolveBlock({"type":"Block","x":512,"y":320,"width":56,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_16","name":"","depth":0}),
// @ts-ignore
Block_10: resolveBlock({"type":"Block","x":536,"y":328,"width":16,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_17","name":"","depth":0}),
// @ts-ignore
SlopeRight_2: resolveSlopeRight({"type":"SlopeRight","x":376,"y":328,"width":32,"height":16,"flippedX":false,"flippedY":true,"uid":"55824435_24","name":"","depth":0}),
// @ts-ignore
SlopeRight_3: resolveSlopeRight({"type":"SlopeRight","x":480,"y":328,"width":32,"height":8,"flippedX":false,"flippedY":true,"uid":"55824435_25","name":"","depth":0}),
// @ts-ignore
SlopeRight_4: resolveSlopeRight({"type":"SlopeRight","x":520,"y":336,"width":16,"height":8,"flippedX":false,"flippedY":true,"uid":"55824435_26","name":"","depth":0}),
// @ts-ignore
SlopeRight_5: resolveSlopeRight({"type":"SlopeRight","x":296,"y":320,"width":32,"height":16,"flippedX":false,"flippedY":true,"uid":"55824435_27","name":"","depth":0}),
// @ts-ignore
SlopeRight_6: resolveSlopeRight({"type":"SlopeRight","x":168,"y":320,"width":32,"height":24,"flippedX":false,"flippedY":true,"uid":"55824435_28","name":"","depth":0}),
// @ts-ignore
SlopeLeft: resolveSlopeLeft({"type":"SlopeLeft","x":248,"y":328,"width":48,"height":16,"flippedX":false,"flippedY":true,"uid":"55845599_29","name":"","depth":0}),
// @ts-ignore
SlopeLeft_1: resolveSlopeLeft({"type":"SlopeLeft","x":344,"y":320,"width":24,"height":16,"flippedX":false,"flippedY":true,"uid":"55845599_30","name":"","depth":0}),
// @ts-ignore
SlopeLeft_2: resolveSlopeLeft({"type":"SlopeLeft","x":440,"y":320,"width":24,"height":24,"flippedX":false,"flippedY":true,"uid":"55845599_31","name":"","depth":0}),
// @ts-ignore
SlopeLeft_3: resolveSlopeLeft({"type":"SlopeLeft","x":552,"y":328,"width":16,"height":16,"flippedX":false,"flippedY":true,"uid":"55845599_32","name":"","depth":0}),
// @ts-ignore
SlopeLeft_4: resolveSlopeLeft({"type":"SlopeLeft","x":568,"y":320,"width":32,"height":16,"flippedX":false,"flippedY":true,"uid":"55845599_33","name":"","depth":0}),
// @ts-ignore
SlopeLeft_5: resolveSlopeLeft({"type":"SlopeLeft","x":608,"y":312,"width":32,"height":16,"flippedX":false,"flippedY":true,"uid":"55845599_34","name":"","depth":0}),
// @ts-ignore
SlopeRight_7: resolveSlopeRight({"type":"SlopeRight","x":96,"y":312,"width":40,"height":16,"flippedX":false,"flippedY":true,"uid":"55824435_35","name":"","depth":0}),
// @ts-ignore
SlopeRight_8: resolveSlopeRight({"type":"SlopeRight","x":568,"y":96,"width":32,"height":16,"flippedX":false,"flippedY":true,"uid":"55824435_36","name":"","depth":0}),
// @ts-ignore
SlopeRight_9: resolveSlopeRight({"type":"SlopeRight","x":592,"y":88,"width":24,"height":16,"flippedX":false,"flippedY":false,"uid":"55824435_37","name":"","depth":0}),
// @ts-ignore
SlopeLeft_6: resolveSlopeLeft({"type":"SlopeLeft","x":736,"y":88,"width":16,"height":8,"flippedX":false,"flippedY":false,"uid":"55845599_38","name":"","depth":0}),
// @ts-ignore
SlopeLeft_7: resolveSlopeLeft({"type":"SlopeLeft","x":752,"y":96,"width":32,"height":16,"flippedX":false,"flippedY":true,"uid":"55845599_39","name":"","depth":0}),
// @ts-ignore
SlopeLeft_8: resolveSlopeLeft({"type":"SlopeLeft","x":736,"y":104,"width":16,"height":24,"flippedX":false,"flippedY":true,"uid":"55845599_40","name":"","depth":0}),
// @ts-ignore
SlopeLeft_9: resolveSlopeLeft({"type":"SlopeLeft","x":720,"y":144,"width":16,"height":8,"flippedX":false,"flippedY":true,"uid":"55845599_41","name":"","depth":0}),
// @ts-ignore
SlopeRight_10: resolveSlopeRight({"type":"SlopeRight","x":664,"y":144,"width":16,"height":8,"flippedX":false,"flippedY":true,"uid":"55824435_42","name":"","depth":0}),
// @ts-ignore
DesertGate: resolveGate({"type":"Gate","x":656,"y":368,"width":128,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_43","levelName":"DesertTown","checkpointName":"FromGiants","name":"DesertGate","depth":0}),
// @ts-ignore
JungleGate: resolveGate({"type":"Gate","x":24,"y":368,"width":128,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_44","levelName":"JungleTown","checkpointName":"FromGiants","name":"JungleGate","depth":0}),
// @ts-ignore
Sign: resolveSign({"type":"Sign","x":588,"y":96,"flippedX":false,"flippedY":false,"uid":"86706091_45","title":"Giants","message":"Welcome to the nimbus of the giants.","name":"","depth":0}),
// @ts-ignore
Door: resolveDoor({"type":"Door","x":385,"y":280,"flippedX":false,"flippedY":false,"uid":"55913988_46","levelName":"GiantsRestaurant","checkpointName":"","name":"","depth":0}),
FromRestaurant: {"type":"Checkpoint","x":364,"y":312,"flippedX":false,"flippedY":false,"uid":"55940370_47","name":"FromRestaurant","faceRight":false,"depth":0},
// @ts-ignore
SlopeLeft_10: resolveSlopeLeft({"type":"SlopeLeft","x":288,"y":304,"width":32,"height":8,"flippedX":false,"flippedY":false,"uid":"55845599_48","name":"","depth":0}),
// @ts-ignore
Block_11: resolveBlock({"type":"Block","x":208,"y":304,"width":80,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_49","name":"","depth":0}),
// @ts-ignore
SlopeRight_11: resolveSlopeRight({"type":"SlopeRight","x":176,"y":304,"width":32,"height":8,"flippedX":false,"flippedY":false,"uid":"55824435_50","name":"","depth":0}),
// @ts-ignore
PipeHorizontal: resolvePipeHorizontal({"type":"PipeHorizontal","x":380,"y":275,"width":40,"flippedX":false,"flippedY":false,"uid":"55841307_51","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_1: resolvePipeHorizontal({"type":"PipeHorizontal","x":389,"y":238,"width":40,"flippedX":false,"flippedY":false,"uid":"55841307_52","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_2: resolvePipeHorizontal({"type":"PipeHorizontal","x":384,"y":201,"width":40,"flippedX":false,"flippedY":false,"uid":"55841307_53","visible":false,"name":"","depth":0})
};
}
};

export const JungleBarArgs = {
    width: 256,
height: 256,
gameObjectsSupplier: () => {
  return {
    JunglePlank: resolveDecalGameObject({
    x: 16,
y: 72,
originX: 0,
originY: 0,
scaleX: 5,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: JunglePlank
}),
JunglePlank_1: resolveDecalGameObject({
    x: 40,
y: 72,
originX: 0,
originY: 0,
scaleX: 5,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: JunglePlank
}),
JunglePlank_2: resolveDecalGameObject({
    x: 56,
y: 128,
originX: 0,
originY: 0,
scaleX: 5,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: JunglePlank
}),
JunglePlank_3: resolveDecalGameObject({
    x: 80,
y: 128,
originX: 0,
originY: 0,
scaleX: 5,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: JunglePlank
}),
JunglePlank_4: resolveDecalGameObject({
    x: 16,
y: 184,
originX: 0,
originY: 0,
scaleX: 5,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: JunglePlank
}),
JunglePlank_5: resolveDecalGameObject({
    x: 40,
y: 184,
originX: 0,
originY: 0,
scaleX: 5,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: JunglePlank
}),
DinerTable: resolveDecalGameObject({
    x: 152,
y: 73,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: DinerTable
}),
DinerTable_1: resolveDecalGameObject({
    x: 192,
y: 129,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: DinerTable
}),
DinerTable_2: resolveDecalGameObject({
    x: 96,
y: 129,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: DinerTable
}),
DinerTable_3: resolveDecalGameObject({
    x: 176,
y: 241,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: DinerTable
}),
Cobweb: resolveDecalGameObject({
    x: 233,
y: 148,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: Cobweb
}),
SmallDecorativeRock: resolveDecalGameObject({
    x: 25,
y: 236,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
Bottle1: resolveDecalGameObject({
    x: 24,
y: 225,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: Bottle1
}),
SmallDecorativeRock_1: resolveDecalGameObject({
    x: 28,
y: 237,
originX: 0.5,
originY: 0.5,
scaleX: -0.3,
scaleY: -0.5,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
CocktailGlass: resolveDecalGameObject({
    x: 104,
y: 118,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: CocktailGlass
}),
GroundSpeckles: resolveDecalGameObject({
    x: 208,
y: 112,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: GroundSpeckles
}),
GroundSpeckles_1: resolveDecalGameObject({
    x: 153,
y: 101,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: GroundSpeckles
}),
GroundSpeckles_2: resolveDecalGameObject({
    x: 104,
y: 112,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: GroundSpeckles
}),
GroundSpeckles_3: resolveDecalGameObject({
    x: 49,
y: 101,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: GroundSpeckles
}),
GroundSpeckles_4: resolveDecalGameObject({
    x: 49,
y: 213,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: GroundSpeckles
}),
GroundSpeckles_5: resolveDecalGameObject({
    x: 104,
y: 224,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: GroundSpeckles
}),
GroundSpeckles_6: resolveDecalGameObject({
    x: 161,
y: 213,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: GroundSpeckles
}),
GroundSpeckles_7: resolveDecalGameObject({
    x: 208,
y: 226,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: GroundSpeckles
}),
DontPoster: resolveDecalGameObject({
    x: 80,
y: 40,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: DontPoster
}),
DontPoster_1: resolveDecalGameObject({
    x: 80,
y: 208,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: DontPoster
}),
PaSpeaker: resolveDecalGameObject({
    x: 221,
y: 200,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: PaSpeaker
}),
PaSpeaker_1: resolveDecalGameObject({
    x: 221,
y: 40,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: PaSpeaker
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":0,"y":0,"width":256,"height":24,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":0,"y":24,"width":16,"height":216,"flippedX":false,"flippedY":false,"uid":"55823268_1","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":240,"y":24,"width":16,"height":216,"flippedX":false,"flippedY":false,"uid":"55823268_2","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":0,"y":240,"width":256,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_3","name":"","depth":0}),
// @ts-ignore
Door: resolveDoor({"type":"Door","x":32,"y":40,"flippedX":false,"flippedY":false,"uid":"55913988_4","levelName":"JungleTown","checkpointName":"FromBar","name":"","depth":0}),
// @ts-ignore
PipeHorizontal: resolvePipeHorizontal({"type":"PipeHorizontal","x":16,"y":72,"width":184,"flippedX":false,"flippedY":false,"uid":"55841307_5","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_1: resolvePipeHorizontal({"type":"PipeHorizontal","x":56,"y":128,"width":184,"flippedX":false,"flippedY":false,"uid":"55841307_6","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_2: resolvePipeHorizontal({"type":"PipeHorizontal","x":16,"y":184,"width":184,"flippedX":false,"flippedY":false,"uid":"55841307_7","visible":false,"name":"","depth":0}),
// @ts-ignore
Barkeeper: resolveNpc({"type":"NpcIguana","x":48,"y":240,"flippedX":false,"flippedY":false,"uid":"26367058_8","name":"Barkeeper","style":12,"depth":0}),
Player: {"type":"Player","x":88,"y":72,"flippedX":false,"flippedY":false,"uid":"55988047_9","faceRight":true,"name":"","depth":0},
// @ts-ignore
BigMirror: resolveRegion({"type":"Region","x":16,"y":141,"width":224,"height":43,"flippedX":false,"flippedY":false,"uid":"25971607_13","name":"BigMirror","depth":0}),
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":224,"y":16,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_14","name":"","depth":0}),
// @ts-ignore
SlopeLeft: resolveSlopeLeft({"type":"SlopeLeft","x":0,"y":16,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55845599_15","name":"","depth":0}),
// @ts-ignore
Patron: resolveNpc({"type":"NpcIguana","x":128,"y":127,"flippedX":true,"flippedY":false,"uid":"26367058_16","name":"Patron","style":14,"depth":0})
};
}
};

export const JungleBossArenaArgs = {
    width: 664,
height: 256,
gameObjectsSupplier: () => {
  return {
    VolcanoMineralDebris: resolveDecalGameObject({
    x: 18.516858771597953,
y: 116.89593940674891,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoMineralDebris
}),
VolcanoMineralDebris_1: resolveDecalGameObject({
    x: 0.1930228939583003,
y: 91.47900577002292,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoMineralDebris
}),
VolcanoMineralDebris_2: resolveDecalGameObject({
    x: 45.50248228231385,
y: 235.01497775151984,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 1.5707963267948966,
layerName: "TerrainDecals",
texture: VolcanoMineralDebris
}),
VolcanoMineralDebris_3: resolveDecalGameObject({
    x: 29.50248228231385,
y: 260.01497775151984,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 1.5707963267948966,
layerName: "TerrainDecals",
texture: VolcanoMineralDebris
}),
VolcanoPillarBroken: resolveDecalGameObject({
    x: 81,
y: 122,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoPillarBroken
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":-104,"y":216,"width":768,"height":48,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
// @ts-ignore
Stump: resolveTreeStump({"type":"TreeStump","x":584,"y":216,"flippedX":false,"flippedY":false,"uid":"77429484_1","levelName":"JungleTown","checkpointName":"HolyStump","name":"Stump","depth":0,"faceRight":false}),
Player: {"type":"Player","x":448,"y":216,"flippedX":false,"flippedY":false,"uid":"55988047_2","faceRight":false,"name":"","depth":0},
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":408,"y":0,"width":256,"height":136,"flippedX":false,"flippedY":false,"uid":"55823268_4","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":-104,"y":0,"width":256,"height":136,"flippedX":false,"flippedY":false,"uid":"55823268_5","name":"","depth":0}),
// @ts-ignore
RightBossWall: resolveBlock({"type":"Block","x":408,"y":136,"width":16,"height":80,"flippedX":false,"flippedY":false,"uid":"55823268_6","name":"RightBossWall","depth":0}),
// @ts-ignore
LeftBossWall: resolveBlock({"type":"Block","x":136,"y":136,"width":16,"height":80,"flippedX":false,"flippedY":false,"uid":"55823268_7","name":"LeftBossWall","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":632,"y":136,"width":32,"height":80,"flippedX":false,"flippedY":false,"uid":"55823268_8","name":"","depth":0}),
// @ts-ignore
Gate: resolveGate({"type":"Gate","x":0,"y":184,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_9","levelName":"VolcanoCavern","checkpointName":"FromBoss","name":"","depth":0}),
FromVolcano: {"type":"Checkpoint","x":56,"y":216,"flippedX":false,"flippedY":false,"uid":"55940370_10","name":"FromVolcano","faceRight":true,"depth":0},
// @ts-ignore
ActivateBossRegion: resolveRegion({"type":"Region","x":168,"y":136,"width":224,"height":80,"flippedX":false,"flippedY":false,"uid":"25971607_11","name":"ActivateBossRegion","depth":0}),
BossCamera: {"type":"Anchor","x":152,"y":0,"flippedX":false,"flippedY":false,"uid":"25979726_12","name":"BossCamera","depth":0},
// @ts-ignore
Sign: resolveSign({"type":"Sign","x":120,"y":216,"flippedX":false,"flippedY":false,"uid":"86706091_13","title":"Volcano","message":"This way to the volcano.","name":"","depth":0}),
DefeatedBoss: {"type":"Checkpoint","x":280,"y":216,"flippedX":false,"flippedY":false,"uid":"55940370_14","name":"DefeatedBoss","faceRight":false,"depth":0}
};
}
};

export const JungleDeepArgs = {
    width: 696,
height: 632,
gameObjectsSupplier: () => {
  return {
    KeyYellow: resolveDecalGameObject({
    x: 286,
y: 384,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "FrontDecals",
texture: KeyYellow
}),
GroundSpeckles: resolveDecalGameObject({
    x: 377,
y: 420,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
JungleTreeRoot: resolveDecalGameObject({
    x: 256,
y: 392,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: JungleTreeRoot
}),
JungleTreeRoot_1: resolveDecalGameObject({
    x: 290,
y: 398,
originX: 0.5,
originY: 0.5,
scaleX: -0.7,
scaleY: 0.7,
rotation: 0.47251802957156447,
layerName: "TerrainDecals",
texture: JungleTreeRoot
}),
JungleTreeRoot_2: resolveDecalGameObject({
    x: 302,
y: 393,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 2,
rotation: -2.8821316932937546,
layerName: "TerrainDecals",
texture: JungleTreeRoot
}),
JungleTreeRoot_3: resolveDecalGameObject({
    x: 259,
y: 406,
originX: 0.5,
originY: 0.5,
scaleX: -0.7,
scaleY: 0.7,
rotation: 1.8231748641613885,
layerName: "TerrainDecals",
texture: JungleTreeRoot
}),
JungleTreeRoot_4: resolveDecalGameObject({
    x: 275,
y: 406,
originX: 0.5,
originY: 0.5,
scaleX: -0.7,
scaleY: -0.7,
rotation: 1.5205832193689774,
layerName: "TerrainDecals",
texture: JungleTreeRoot
}),
JunglePlank: resolveDecalGameObject({
    x: 552,
y: 480,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: JunglePlank
}),
JunglePlank_1: resolveDecalGameObject({
    x: 0,
y: 528,
originX: 0,
originY: 0,
scaleX: 3.5,
scaleY: 1.25,
rotation: 0,
layerName: "TerrainDecals",
texture: JunglePlank
}),
JunglePlank_2: resolveDecalGameObject({
    x: 464,
y: 416,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: JunglePlank
}),
JunglePlank_3: resolveDecalGameObject({
    x: 0,
y: 544,
originX: 0,
originY: 0,
scaleX: 2,
scaleY: 1.25,
rotation: 0,
layerName: "TerrainDecals",
texture: JunglePlank
}),
JunglePlank_4: resolveDecalGameObject({
    x: 0,
y: 560,
originX: 0,
originY: 0,
scaleX: 2.75,
scaleY: 1.25,
rotation: 0,
layerName: "TerrainDecals",
texture: JunglePlank
}),
GroundSpeckles_1: resolveDecalGameObject({
    x: 144.04919845434281,
y: 556.7072757230868,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
GroundSpeckles_2: resolveDecalGameObject({
    x: 309.8328129090413,
y: 556.7072757230868,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
GroundSpeckles_3: resolveDecalGameObject({
    x: 506.1093966186209,
y: 555.6557940246427,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
SmallDecorativeRock: resolveDecalGameObject({
    x: 430.90489497945504,
y: 541.0247251968416,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
JungleTreeRoot_5: resolveDecalGameObject({
    x: 308,
y: 390,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0.1657513292706501,
layerName: "BackgroundDecals",
texture: JungleTreeRoot
}),
SpikyBrushB: resolveDecalGameObject({
    x: 216,
y: 384,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
JungleBrushHeavy: resolveDecalGameObject({
    x: 88,
y: 496,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JungleBrushHeavy
}),
JungleBrushHeavy_1: resolveDecalGameObject({
    x: 88,
y: 416,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JungleBrushHeavy
}),
JungleBrushHeavy_2: resolveDecalGameObject({
    x: 168,
y: 496,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JungleBrushHeavy
}),
JungleBrushHeavy_3: resolveDecalGameObject({
    x: 176,
y: 432,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JungleBrushHeavy
}),
JungleBrushHeavy_4: resolveDecalGameObject({
    x: 264,
y: 504,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JungleBrushHeavy
}),
JungleBrushHeavy_5: resolveDecalGameObject({
    x: 464,
y: 496,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JungleBrushHeavy
}),
JungleBrushHeavy_6: resolveDecalGameObject({
    x: 560,
y: 504,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JungleBrushHeavy
}),
JungleBrushHeavy_7: resolveDecalGameObject({
    x: 536,
y: 440,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JungleBrushHeavy
}),
JungleBrushHeavy_8: resolveDecalGameObject({
    x: 616,
y: 456,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JungleBrushHeavy
}),
JungleBrushHeavy_9: resolveDecalGameObject({
    x: 688,
y: 520,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JungleBrushHeavy
}),
JungleBrushHeavy_10: resolveDecalGameObject({
    x: 680,
y: 424,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JungleBrushHeavy
}),
JungleBrushHeavy_11: resolveDecalGameObject({
    x: -8,
y: 480,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JungleBrushHeavy
}),
VineSmall: resolveDecalGameObject({
    x: 28,
y: 377,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VineSmall
}),
VineSmall_1: resolveDecalGameObject({
    x: 108,
y: 458,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VineSmall
}),
VineSmall_2: resolveDecalGameObject({
    x: 403,
y: 460,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VineSmall
}),
VineSmall_3: resolveDecalGameObject({
    x: 627,
y: 482,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VineSmall
}),
VineSmall_4: resolveDecalGameObject({
    x: 643,
y: 488,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VineSmall
}),
SpikyBrushB_1: resolveDecalGameObject({
    x: 417.2701569786264,
y: 541.6588990573454,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":200,"y":392,"width":208,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_58","name":"","depth":0}),
// @ts-ignore
JungleTree: resolveJungleTree({"type":"JungleTree","x":280,"y":392,"height":192,"flippedX":false,"flippedY":false,"uid":"25711099_59","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":-152,"y":544,"width":848,"height":88,"flippedX":false,"flippedY":false,"uid":"55823268_60","name":"","depth":0}),
Player: {"type":"Player","x":80,"y":528,"flippedX":false,"flippedY":false,"uid":"55988047_61","faceRight":true,"name":"","depth":0},
// @ts-ignore
ClownSneezy: resolveClownSneezy({"type":"ClownSneezy","x":232,"y":512,"flippedX":false,"flippedY":false,"uid":"11949926_62","name":"","depth":0}),
// @ts-ignore
ClownSneezy_1: resolveClownSneezy({"type":"ClownSneezy","x":360,"y":472,"flippedX":false,"flippedY":false,"uid":"11949926_64","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":0,"y":528,"width":112,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_65","name":"","depth":0}),
// @ts-ignore
Gate: resolveGate({"type":"Gate","x":-16,"y":496,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_66","levelName":"JungleFromDesert","checkpointName":"FromDeep","name":"","depth":0}),
// @ts-ignore
PipeHorizontal: resolvePipeHorizontal({"type":"PipeHorizontal","x":552,"y":480,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_68","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_1: resolvePipeHorizontal({"type":"PipeHorizontal","x":464,"y":416,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_70","visible":false,"name":"","depth":0}),
// @ts-ignore
ClownSneezy_2: resolveClownSneezy({"type":"ClownSneezy","x":472,"y":344,"flippedX":false,"flippedY":false,"uid":"11949926_71","name":"","depth":0})
};
}
};

export const JungleFromDesertArgs = {
    width: 1568,
height: 512,
gameObjectsSupplier: () => {
  return {
    CloudLong: resolveDecalGameObject({
    x: 392,
y: 338,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "FrontDecals",
texture: CloudLong
}),
VineSmall: resolveDecalGameObject({
    x: 472,
y: 432,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VineSmall
}),
VineSmall_1: resolveDecalGameObject({
    x: 520,
y: 448,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VineSmall
}),
SmallDecorativeRock: resolveDecalGameObject({
    x: 456,
y: 478,
originX: 0.5,
originY: 0.5,
scaleX: 0.8,
scaleY: 0.8,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_1: resolveDecalGameObject({
    x: 472,
y: 486,
originX: 0.5,
originY: 0.5,
scaleX: -0.8,
scaleY: 0.8,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
GroundSpeckles: resolveDecalGameObject({
    x: 408,
y: 472,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
GroundSpeckles_1: resolveDecalGameObject({
    x: 184,
y: 472,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
GroundSpeckles_2: resolveDecalGameObject({
    x: 736,
y: 408,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
GroundSpeckles_3: resolveDecalGameObject({
    x: 1064,
y: 408,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
SmallDecorativeRock_2: resolveDecalGameObject({
    x: 1176,
y: 410,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
VineSmall_2: resolveDecalGameObject({
    x: 1152,
y: 464,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VineSmall
}),
VineSmall_3: resolveDecalGameObject({
    x: 1168,
y: 460,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VineSmall
}),
VineSmall_4: resolveDecalGameObject({
    x: 1280,
y: 464,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VineSmall
}),
VineSmall_5: resolveDecalGameObject({
    x: 1296,
y: 460,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VineSmall
}),
VineSmall_6: resolveDecalGameObject({
    x: 1032,
y: 460,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VineSmall
}),
VineSmall_7: resolveDecalGameObject({
    x: 1016,
y: 464,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VineSmall
}),
GroundSpeckles_4: resolveDecalGameObject({
    x: 1392,
y: 408,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
JunglePlank: resolveDecalGameObject({
    x: 1480,
y: 408,
originX: 0,
originY: 0,
scaleX: 2.75,
scaleY: 1.25,
rotation: 0,
layerName: "TerrainDecals",
texture: JunglePlank
}),
JunglePlank_1: resolveDecalGameObject({
    x: 1512,
y: 424,
originX: 0,
originY: 0,
scaleX: 2.75,
scaleY: 1.25,
rotation: 0,
layerName: "TerrainDecals",
texture: JunglePlank
}),
JunglePlank_2: resolveDecalGameObject({
    x: 1536,
y: 440,
originX: 0,
originY: 0,
scaleX: 2.75,
scaleY: 1.25,
rotation: 0,
layerName: "TerrainDecals",
texture: JunglePlank
}),
ToCave: resolveDecalGameObject({
    x: 600,
y: 512,
originX: 0.5,
originY: 0.5,
scaleX: 3,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: GlowingCircle
}),
SpikyBrushB: resolveDecalGameObject({
    x: 678,
y: 400,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
SpikyBrushB_1: resolveDecalGameObject({
    x: 384,
y: 464,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
SpikyBrushB_2: resolveDecalGameObject({
    x: 195,
y: 464,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
JungleHouse1: resolveDecalGameObject({
    x: 1224,
y: 408,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JungleHouse1
}),
SpikyBrushA: resolveDecalGameObject({
    x: 1360,
y: 400,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushA
}),
DeepGlow: resolveDecalGameObject({
    x: 1504,
y: 0,
originX: 0,
originY: 0,
scaleX: 2,
scaleY: 13,
rotation: 0,
layerName: "BackgroundDecals",
texture: GlowingEdge
}),
JungleBrushHeavy: resolveDecalGameObject({
    x: 1560,
y: 392,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JungleBrushHeavy
}),
// @ts-ignore
SlopeLeft: resolveSlopeLeft({"type":"SlopeLeft","x":432,"y":472,"width":120,"height":40,"flippedX":false,"flippedY":false,"uid":"55845599_0","name":"","depth":0}),
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":432,"y":408,"width":128,"height":40,"flippedX":false,"flippedY":true,"uid":"55824435_2","name":"","depth":0}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":560,"y":408,"width":1160,"height":40,"flippedX":false,"flippedY":false,"uid":"55823268_3","name":"","depth":0}),
// @ts-ignore
SlopeRight_1: resolveSlopeRight({"type":"SlopeRight","x":560,"y":448,"width":96,"height":64,"flippedX":false,"flippedY":true,"uid":"55824435_4","name":"","depth":0}),
Player: {"type":"Player","x":480,"y":488,"flippedX":false,"flippedY":false,"uid":"55988047_6","faceRight":false,"name":"","depth":0},
// @ts-ignore
JungleTree: resolveJungleTree({"type":"JungleTree","x":704,"y":408,"height":168,"flippedX":false,"flippedY":false,"uid":"25711099_8","name":"","depth":0}),
// @ts-ignore
JungleTree_1: resolveJungleTree({"type":"JungleTree","x":352,"y":472,"height":200,"flippedX":false,"flippedY":false,"uid":"25711099_10","name":"","depth":0}),
// @ts-ignore
JungleTree_2: resolveJungleTree({"type":"JungleTree","x":208,"y":472,"height":80,"flippedX":false,"flippedY":false,"uid":"25711099_12","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":656,"y":448,"width":168,"height":64,"flippedX":false,"flippedY":false,"uid":"55823268_14","name":"","depth":0}),
// @ts-ignore
SlopeLeft_1: resolveSlopeLeft({"type":"SlopeLeft","x":80,"y":440,"width":72,"height":32,"flippedX":false,"flippedY":false,"uid":"55845599_15","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":0,"y":440,"width":80,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_16","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":48,"y":472,"width":384,"height":40,"flippedX":false,"flippedY":false,"uid":"55823268_17","name":"","depth":0}),
// @ts-ignore
JungleTree_3: resolveJungleTree({"type":"JungleTree","x":254,"y":496,"height":368,"flippedX":false,"flippedY":false,"uid":"25711099_18","name":"","depth":4}),
// @ts-ignore
JungleTree_4: resolveJungleTree({"type":"JungleTree","x":496,"y":512,"height":368,"flippedX":false,"flippedY":false,"uid":"25711099_19","name":"","depth":4}),
// @ts-ignore
JungleTree_5: resolveJungleTree({"type":"JungleTree","x":56,"y":480,"height":320,"flippedX":false,"flippedY":false,"uid":"25711099_20","name":"","depth":4}),
// @ts-ignore
CommonClown: resolveCommonClown({"type":"CommonClown","x":992,"y":384,"flippedX":false,"flippedY":false,"uid":"68762216_22","name":"","depth":0}),
// @ts-ignore
ToCaveBackground: resolveRegion({"type":"Region","x":432,"y":408,"width":224,"height":168,"flippedX":false,"flippedY":false,"uid":"25971607_23","name":"ToCaveBackground","depth":0}),
// @ts-ignore
Sign: resolveSign({"type":"Sign","x":478,"y":408,"flippedX":false,"flippedY":false,"uid":"86706091_24","title":"Jungle","message":"Welcome to the jungle.","name":"","depth":0}),
// @ts-ignore
Gate: resolveGate({"type":"Gate","x":552,"y":472,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_25","levelName":"OversizedAngelArena","checkpointName":"FromJungle","name":"","depth":0}),
// @ts-ignore
SpiderValuable: resolveValuableBlue({"type":"ValuableBlue","x":736,"y":408,"flippedX":false,"flippedY":false,"uid":"55991906_26","name":"SpiderValuable","depth":0}),
// @ts-ignore
Block_4: resolveBlock({"type":"Block","x":0,"y":472,"width":48,"height":56,"flippedX":false,"flippedY":false,"uid":"55823268_27","name":"","depth":0}),
// @ts-ignore
JungleTree_6: resolveJungleTree({"type":"JungleTree","x":920,"y":520,"height":368,"flippedX":false,"flippedY":false,"uid":"25711099_28","name":"","depth":4}),
// @ts-ignore
Pool: resolvePool({"type":"Pool","x":824,"y":464,"width":712,"height":48,"flippedX":false,"flippedY":false,"uid":"38353047_29","name":"","depth":2}),
// @ts-ignore
SlopeLeft_2: resolveSlopeLeft({"type":"SlopeLeft","x":824,"y":448,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55845599_31","name":"","depth":0}),
// @ts-ignore
Door: resolveDoor({"type":"Door","x":1224,"y":376,"flippedX":false,"flippedY":false,"uid":"55913988_32","levelName":"JungleSickIguana","checkpointName":"","name":"","depth":0}),
// @ts-ignore
PipeHorizontal: resolvePipeHorizontal({"type":"PipeHorizontal","x":1178,"y":352,"width":92,"flippedX":false,"flippedY":false,"uid":"55841307_33","visible":false,"name":"","depth":0}),
// @ts-ignore
JungleTree_7: resolveJungleTree({"type":"JungleTree","x":1249,"y":352,"height":64,"flippedX":false,"flippedY":false,"uid":"25711099_34","name":"","depth":0}),
FromHouse: {"type":"Checkpoint","x":1192,"y":408,"flippedX":false,"flippedY":false,"uid":"55940370_35","name":"FromHouse","faceRight":false,"depth":0},
// @ts-ignore
JungleTree_8: resolveJungleTree({"type":"JungleTree","x":1128,"y":512,"height":368,"flippedX":false,"flippedY":false,"uid":"25711099_38","name":"","depth":4}),
// @ts-ignore
JungleTree_9: resolveJungleTree({"type":"JungleTree","x":1360,"y":520,"height":368,"flippedX":false,"flippedY":false,"uid":"25711099_39","name":"","depth":4}),
// @ts-ignore
SlopeRight_2: resolveSlopeRight({"type":"SlopeRight","x":1504,"y":448,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_43","name":"","depth":0}),
// @ts-ignore
Gate_1: resolveGate({"type":"Gate","x":0,"y":408,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_44","levelName":"JungleTown","checkpointName":"FromDesert","name":"","depth":0}),
FromTown: {"type":"Checkpoint","x":72,"y":440,"flippedX":false,"flippedY":false,"uid":"55940370_45","name":"FromTown","faceRight":true,"depth":0},
// @ts-ignore
Block_5: resolveBlock({"type":"Block","x":536,"y":160,"width":112,"height":192,"flippedX":false,"flippedY":false,"uid":"55823268_46","name":"","depth":0}),
BiguaSpawn: {"type":"Anchor","x":600,"y":160,"flippedX":false,"flippedY":false,"uid":"25979726_47","name":"BiguaSpawn","depth":0},
// @ts-ignore
PipeHorizontal_1: resolvePipeHorizontal({"type":"PipeHorizontal","x":504,"y":288,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_48","visible":true,"name":"","depth":0}),
// @ts-ignore
PipeLeftEnd: resolvePipeLeftEnd({"type":"PipeLeftEnd","x":504,"y":288,"flippedX":false,"flippedY":false,"uid":"63428932_49","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_2: resolvePipeHorizontal({"type":"PipeHorizontal","x":504,"y":216,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_50","visible":true,"name":"","depth":0}),
// @ts-ignore
PipeLeftEnd_1: resolvePipeLeftEnd({"type":"PipeLeftEnd","x":504,"y":216,"flippedX":false,"flippedY":false,"uid":"63428932_51","name":"","depth":0}),
// @ts-ignore
BehindPillar: resolveRegion({"type":"Region","x":536,"y":352,"width":112,"height":56,"flippedX":false,"flippedY":false,"uid":"25971607_52","name":"BehindPillar","depth":0}),
// @ts-ignore
ClownSneezy: resolveClownSneezy({"type":"ClownSneezy","x":856,"y":384,"flippedX":false,"flippedY":false,"uid":"11949926_53","name":"","depth":0}),
// @ts-ignore
ClownSneezy_1: resolveClownSneezy({"type":"ClownSneezy","x":224,"y":448,"flippedX":false,"flippedY":false,"uid":"11949926_54","name":"","depth":0}),
TestBigua: {"type":"Checkpoint","x":512,"y":288,"flippedX":false,"flippedY":false,"uid":"55940370_55","name":"TestBigua","faceRight":true,"depth":0},
// @ts-ignore
Block_6: resolveBlock({"type":"Block","x":1536,"y":448,"width":184,"height":64,"flippedX":false,"flippedY":false,"uid":"55823268_57","name":"","depth":0}),
// @ts-ignore
Gate_2: resolveGate({"type":"Gate","x":1536,"y":376,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_60","levelName":"JungleDeep","checkpointName":"","name":"","depth":0}),
FromDeep: {"type":"Checkpoint","x":1488,"y":408,"flippedX":false,"flippedY":false,"uid":"55940370_61","name":"FromDeep","faceRight":false,"depth":0}
};
}
};

export const JungleInnArgs = {
    width: 512,
height: 256,
gameObjectsSupplier: () => {
  return {
    GroundSpeckles: resolveDecalGameObject({
    x: 80,
y: 157,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
GroundSpeckles_1: resolveDecalGameObject({
    x: 352,
y: 221,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
SmallDecorativeRock: resolveDecalGameObject({
    x: 165,
y: 146,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_1: resolveDecalGameObject({
    x: 152,
y: 146,
originX: 0.5,
originY: 1,
scaleX: -0.8,
scaleY: 0.8,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
VineSmall: resolveDecalGameObject({
    x: 424,
y: 128,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "TerrainDecals",
texture: VineSmall
}),
VineSmall_1: resolveDecalGameObject({
    x: 366,
y: 176,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "TerrainDecals",
texture: VineSmall
}),
RoseVase: resolveDecalGameObject({
    x: 56,
y: 76,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: RoseVase
}),
GlowingCircle: resolveDecalGameObject({
    x: 80,
y: 32,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: GlowingCircle
}),
GlowingCircle_1: resolveDecalGameObject({
    x: 232,
y: 128,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: GlowingCircle
}),
GlowingCircle_2: resolveDecalGameObject({
    x: 392,
y: 72,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: GlowingCircle
}),
GlowingCircle_3: resolveDecalGameObject({
    x: 512,
y: 200,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: GlowingCircle
}),
DontPoster: resolveDecalGameObject({
    x: 112,
y: 104,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: DontPoster
}),
JunglePlank: resolveDecalGameObject({
    x: 48,
y: 88,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 0.75,
rotation: 0,
layerName: "BackgroundDecals",
texture: JunglePlank
}),
BookCollection: resolveDecalGameObject({
    x: 40,
y: 78,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: BookCollection
}),
OverheadLamp: resolveDecalGameObject({
    x: 160,
y: 88,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: OverheadLamp
}),
Pipe: resolveDecalGameObject({
    x: 160,
y: 82,
originX: 1,
originY: 1,
scaleX: 1,
scaleY: 10,
rotation: 0,
layerName: "BackgroundDecals",
texture: Pipe
}),
JunglePlankDecoration: resolveDecalGameObject({
    x: 424,
y: 160,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JunglePlankDecoration
}),
JunglePlankDecoration_1: resolveDecalGameObject({
    x: 376,
y: 160,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JunglePlankDecoration
}),
JunglePlankDecoration_2: resolveDecalGameObject({
    x: 328,
y: 160,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JunglePlankDecoration
}),
JunglePlankDecoration_3: resolveDecalGameObject({
    x: 280,
y: 160,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JunglePlankDecoration
}),
JunglePlankDecoration_4: resolveDecalGameObject({
    x: 232,
y: 160,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JunglePlankDecoration
}),
JunglePlankDecoration_5: resolveDecalGameObject({
    x: 461,
y: 112,
originX: 0,
originY: 0,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JunglePlankDecoration
}),
JunglePlankDecoration_6: resolveDecalGameObject({
    x: 509,
y: 112,
originX: 0,
originY: 0,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JunglePlankDecoration
}),
Cobweb: resolveDecalGameObject({
    x: 456,
y: 128,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Cobweb
}),
JunglePlankDecoration_7: resolveDecalGameObject({
    x: 368,
y: 64,
originX: 0,
originY: 0,
scaleX: -1,
scaleY: -1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JunglePlankDecoration
}),
JunglePlankDecoration_8: resolveDecalGameObject({
    x: 320,
y: 64,
originX: 0,
originY: 0,
scaleX: -1,
scaleY: -1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JunglePlankDecoration
}),
// @ts-ignore
Door: resolveDoor({"type":"Door","x":32,"y":112,"flippedX":false,"flippedY":false,"uid":"55913988_0","levelName":"JungleTown","checkpointName":"FromInn","name":"","depth":0}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":-8,"y":144,"width":256,"height":112,"flippedX":false,"flippedY":false,"uid":"55823268_1","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":0,"y":0,"width":16,"height":160,"flippedX":false,"flippedY":false,"uid":"55823268_2","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":16,"y":0,"width":496,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_3","name":"","depth":0}),
Player: {"type":"Player","x":80,"y":144,"flippedX":false,"flippedY":false,"uid":"55988047_4","faceRight":true,"name":"","depth":0},
// @ts-ignore
Innkeeper: resolveNpc({"type":"NpcIguana","x":160,"y":130,"flippedX":true,"flippedY":false,"uid":"26367058_5","name":"Innkeeper","style":11,"depth":0}),
SleepHere: {"type":"Anchor","x":400,"y":200,"flippedX":false,"flippedY":false,"uid":"25979726_15","name":"SleepHere","depth":0},
FromInnSave: {"type":"Checkpoint","x":392,"y":208,"flippedX":false,"flippedY":false,"uid":"55940370_23","name":"FromInnSave","faceRight":false,"depth":0},
// @ts-ignore
SlopeLeft: resolveSlopeLeft({"type":"SlopeLeft","x":248,"y":144,"width":96,"height":64,"flippedX":false,"flippedY":false,"uid":"55845599_24","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":248,"y":208,"width":264,"height":48,"flippedX":false,"flippedY":false,"uid":"55823268_25","name":"","depth":0}),
// @ts-ignore
MovingWall: resolveBlock({"type":"Block","x":216,"y":28,"width":16,"height":120,"flippedX":false,"flippedY":false,"uid":"55823268_26","name":"MovingWall","depth":0}),
// @ts-ignore
SlopeLeft_1: resolveSlopeLeft({"type":"SlopeLeft","x":8,"y":24,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55845599_28","name":"","depth":0}),
// @ts-ignore
Block_4: resolveBlock({"type":"Block","x":496,"y":16,"width":16,"height":192,"flippedX":false,"flippedY":false,"uid":"55823268_29","name":"","depth":0}),
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":472,"y":184,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55824435_30","name":"","depth":0}),
// @ts-ignore
SlopeRight_1: resolveSlopeRight({"type":"SlopeRight","x":288,"y":32,"width":80,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_31","name":"","depth":0}),
// @ts-ignore
Block_5: resolveBlock({"type":"Block","x":368,"y":32,"width":128,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_32","name":"","depth":0}),
// @ts-ignore
SlopeRight_2: resolveSlopeRight({"type":"SlopeRight","x":472,"y":56,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_33","name":"","depth":0}),
// @ts-ignore
PipeHorizontal: resolvePipeHorizontal({"type":"PipeHorizontal","x":143,"y":137,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_34","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_1: resolvePipeHorizontal({"type":"PipeHorizontal","x":32,"y":83,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_35","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_2: resolvePipeHorizontal({"type":"PipeHorizontal","x":144,"y":88,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_36","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_3: resolvePipeHorizontal({"type":"PipeHorizontal","x":344,"y":160,"width":128,"flippedX":false,"flippedY":false,"uid":"55841307_37","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_4: resolvePipeHorizontal({"type":"PipeHorizontal","x":413,"y":112,"width":88,"flippedX":false,"flippedY":false,"uid":"55841307_38","visible":false,"name":"","depth":0}),
// @ts-ignore
Sign: resolveSign({"type":"Sign","x":472,"y":112,"flippedX":false,"flippedY":false,"uid":"86706091_39","title":"Inn","message":"It's the sign the inn used before they switched to neon.","name":"","depth":0})
};
}
};

export const JungleSickIguanaArgs = {
    width: 256,
height: 256,
gameObjectsSupplier: () => {
  return {
    DinerTable: resolveDecalGameObject({
    x: 152,
y: 178,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: DinerTable
}),
GroundSpeckles: resolveDecalGameObject({
    x: 164,
y: 188,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
RoseVase: resolveDecalGameObject({
    x: 160,
y: 170,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: RoseVase
}),
RoseVase_1: resolveDecalGameObject({
    x: 144,
y: 170,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: RoseVase
}),
LightShelf: resolveDecalGameObject({
    x: 96,
y: 124,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: LightShelf
}),
RoseVase_2: resolveDecalGameObject({
    x: 88,
y: 120,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: RoseVase
}),
SecretVase: resolveDecalGameObject({
    x: 104,
y: 120,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: RoseVase
}),
VineSmall: resolveDecalGameObject({
    x: 58,
y: 88,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VineSmall
}),
VineSmall_1: resolveDecalGameObject({
    x: 74,
y: 96,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VineSmall
}),
VineSmall_2: resolveDecalGameObject({
    x: 42,
y: 96,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VineSmall
}),
VineSmall_3: resolveDecalGameObject({
    x: 216,
y: 88,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VineSmall
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":0,"y":176,"width":256,"height":80,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
// @ts-ignore
Door: resolveDoor({"type":"Door","x":40,"y":144,"flippedX":false,"flippedY":false,"uid":"55913988_1","levelName":"JungleFromDesert","checkpointName":"FromHouse","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":0,"y":0,"width":256,"height":80,"flippedX":false,"flippedY":false,"uid":"55823268_2","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":0,"y":80,"width":32,"height":96,"flippedX":false,"flippedY":false,"uid":"55823268_3","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":224,"y":80,"width":32,"height":96,"flippedX":false,"flippedY":false,"uid":"55823268_4","name":"","depth":0}),
// @ts-ignore
NpcIguana: resolveNpc({"type":"NpcIguana","x":192,"y":176,"flippedX":true,"flippedY":false,"uid":"26367058_5","name":"","style":8,"depth":0}),
Player: {"type":"Player","x":88,"y":176,"flippedX":false,"flippedY":false,"uid":"55988047_6","faceRight":true,"name":"","depth":0},
// @ts-ignore
PipeHorizontal: resolvePipeHorizontal({"type":"PipeHorizontal","x":80,"y":120,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_7","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_1: resolvePipeHorizontal({"type":"PipeHorizontal","x":136,"y":170,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_8","visible":false,"name":"","depth":0}),
// @ts-ignore
Window: resolveRegion({"type":"Region","x":136,"y":96,"width":72,"height":32,"flippedX":false,"flippedY":false,"uid":"25971607_9","name":"Window","depth":0}),
// @ts-ignore
JungleTree: resolveJungleTree({"type":"JungleTree","x":192,"y":200,"height":168,"flippedX":false,"flippedY":false,"uid":"25711099_10","name":"","depth":4}),
// @ts-ignore
PipeHorizontal_2: resolvePipeHorizontal({"type":"PipeHorizontal","x":136,"y":128,"width":72,"flippedX":false,"flippedY":false,"uid":"55841307_11","visible":false,"name":"","depth":0})
};
}
};

export const JungleTempleArgs = {
    width: 512,
height: 256,
gameObjectsSupplier: () => {
  return {
    GlowingCircle: resolveDecalGameObject({
    x: 52,
y: 0,
originX: 0.5,
originY: 0.5,
scaleX: 8,
scaleY: 2,
rotation: 0,
layerName: "BackgroundDecals",
texture: GlowingCircle
}),
Key1: resolveDecalGameObject({
    x: 208,
y: 176,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: KeyYellow
}),
Key2: resolveDecalGameObject({
    x: 288,
y: 176,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: KeyYellow
}),
Key3: resolveDecalGameObject({
    x: 368,
y: 176,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: KeyYellow
}),
GlowingCircle_1: resolveDecalGameObject({
    x: 460,
y: 0,
originX: 0.5,
originY: 0.5,
scaleX: 8,
scaleY: 2,
rotation: 0,
layerName: "BackgroundDecals",
texture: GlowingCircle
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":0,"y":224,"width":512,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
// @ts-ignore
Door: resolveDoor({"type":"Door","x":32,"y":192,"flippedX":false,"flippedY":false,"uid":"55913988_1","levelName":"JungleTown","checkpointName":"FromTemple","name":"","depth":0}),
// @ts-ignore
Door1: resolveDoor({"type":"Door","x":192,"y":192,"flippedX":false,"flippedY":false,"uid":"55913988_2","levelName":"UnrealClownDodger","checkpointName":"","name":"Door1","depth":0}),
// @ts-ignore
Door2: resolveDoor({"type":"Door","x":272,"y":192,"flippedX":false,"flippedY":false,"uid":"55913988_3","levelName":"UnrealRoyalChamber","checkpointName":"","name":"Door2","depth":3}),
// @ts-ignore
Door3: resolveDoor({"type":"Door","x":352,"y":192,"flippedX":false,"flippedY":false,"uid":"55913988_4","levelName":"UnrealBalls","checkpointName":"","name":"Door3","depth":3}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":488,"y":0,"width":24,"height":152,"flippedX":false,"flippedY":false,"uid":"55823268_7","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":0,"y":152,"width":24,"height":72,"flippedX":false,"flippedY":false,"uid":"55823268_9","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":488,"y":152,"width":24,"height":72,"flippedX":false,"flippedY":false,"uid":"55823268_10","name":"","depth":0}),
Player: {"type":"Player","x":80,"y":224,"flippedX":false,"flippedY":false,"uid":"55988047_11","faceRight":true,"name":"","depth":0},
// @ts-ignore
Sign: resolveSign({"type":"Sign","x":128,"y":224,"flippedX":false,"flippedY":false,"uid":"86706091_12","title":"Big Key","message":"","name":"","depth":0}),
// @ts-ignore
Block_4: resolveBlock({"type":"Block","x":0,"y":0,"width":24,"height":152,"flippedX":false,"flippedY":false,"uid":"55823268_14","name":"","depth":0}),
// @ts-ignore
Block_5: resolveBlock({"type":"Block","x":80,"y":0,"width":352,"height":152,"flippedX":false,"flippedY":false,"uid":"55823268_15","name":"","depth":0}),
// @ts-ignore
BigKey: resolveRegion({"type":"Region","x":263,"y":112,"width":50,"height":28,"flippedX":false,"flippedY":false,"uid":"25971607_17","name":"BigKey","depth":0}),
// @ts-ignore
MovingWall: resolveBlock({"type":"Block","x":328,"y":184,"width":80,"height":40,"flippedX":false,"flippedY":false,"uid":"55823268_18","name":"MovingWall","depth":0})
};
}
};

export const JungleTownArgs = {
    width: 1544,
height: 448,
gameObjectsSupplier: () => {
  return {
    VineSmall: resolveDecalGameObject({
    x: 784,
y: 392,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "FrontDecals",
texture: VineSmall
}),
VineSmall_1: resolveDecalGameObject({
    x: 584,
y: 244,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "FrontDecals",
texture: VineSmall
}),
VineSmall_2: resolveDecalGameObject({
    x: 600,
y: 252,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "FrontDecals",
texture: VineSmall
}),
SignNeonBar: resolveDecalGameObject({
    x: 1096,
y: 341,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SignNeonBar
}),
SignNeonInn: resolveDecalGameObject({
    x: 933,
y: 334,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SignNeonInn
}),
JungleTent: resolveDecalGameObject({
    x: 697,
y: 359,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: JungleTent
}),
GroundSpeckles: resolveDecalGameObject({
    x: 394,
y: 396,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
GroundSpeckles_1: resolveDecalGameObject({
    x: 738,
y: 389,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
GroundSpeckles_2: resolveDecalGameObject({
    x: 1087,
y: 397,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
GroundSpeckles_3: resolveDecalGameObject({
    x: 1429,
y: 428,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
GroundSpeckles_4: resolveDecalGameObject({
    x: 605,
y: 216,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
Cobweb: resolveDecalGameObject({
    x: 569,
y: 187,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: Cobweb
}),
KeyYellowShrunken: resolveDecalGameObject({
    x: 720,
y: 152,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: KeyYellowShrunken
}),
VineSmall_3: resolveDecalGameObject({
    x: 680,
y: 120,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VineSmall
}),
VineSmall_4: resolveDecalGameObject({
    x: 693,
y: 147,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VineSmall
}),
VineSmall_5: resolveDecalGameObject({
    x: 680,
y: 168,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VineSmall
}),
VineSmall_6: resolveDecalGameObject({
    x: 768,
y: 136,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VineSmall
}),
JungleHouse1: resolveDecalGameObject({
    x: 1120,
y: 384,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JungleHouse1
}),
JunglePlank: resolveDecalGameObject({
    x: 1104,
y: 294,
originX: 0,
originY: 0,
scaleX: 0.5,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JunglePlank
}),
JunglePlank_1: resolveDecalGameObject({
    x: 1104,
y: 304,
originX: 0,
originY: 0,
scaleX: 0.5,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JunglePlank
}),
JunglePlank_2: resolveDecalGameObject({
    x: 1104,
y: 315,
originX: 0,
originY: 0,
scaleX: 0.5,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JunglePlank
}),
VineSmall_7: resolveDecalGameObject({
    x: 1120,
y: 307,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VineSmall
}),
JungleHouse1_1: resolveDecalGameObject({
    x: 928,
y: 344,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JungleHouse1
}),
JunglePlank_3: resolveDecalGameObject({
    x: 892,
y: 304,
originX: 0,
originY: 0,
scaleX: 2.25,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JunglePlank
}),
JunglePlank_4: resolveDecalGameObject({
    x: 882,
y: 315,
originX: 0,
originY: 0,
scaleX: 2.875,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JunglePlank
}),
SpikyBrushB: resolveDecalGameObject({
    x: 968,
y: 376,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
JungleTempleExterior: resolveDecalGameObject({
    x: 232,
y: 384,
originX: 0,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JungleTempleExterior
}),
WiggleVine: resolveDecalGameObject({
    x: 800,
y: 380,
originX: 0.5,
originY: 0,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VineSmall
}),
JunglePlank_5: resolveDecalGameObject({
    x: 600,
y: 224,
originX: 0,
originY: 0,
scaleX: 5,
scaleY: 1,
rotation: 1.5707963267948966,
layerName: "BackgroundDecals",
texture: JunglePlank
}),
JunglePlank_6: resolveDecalGameObject({
    x: 757,
y: 224,
originX: 0,
originY: 0,
scaleX: 5,
scaleY: 1,
rotation: 1.5707963267948966,
layerName: "BackgroundDecals",
texture: JunglePlank
}),
JunglePlank_7: resolveDecalGameObject({
    x: 576,
y: 236,
originX: 0,
originY: 0,
scaleX: 6,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JunglePlank
}),
SmallDecorativeRock: resolveDecalGameObject({
    x: 604,
y: 385,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_1: resolveDecalGameObject({
    x: 759,
y: 377,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SmallDecorativeRock
}),
SpikyBrushB_1: resolveDecalGameObject({
    x: 729,
y: 92,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
SpikyBrushA: resolveDecalGameObject({
    x: 744,
y: 99,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushA
}),
CracksA: resolveDecalGameObject({
    x: 740,
y: 157,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CracksA
}),
SpikyBrushB_2: resolveDecalGameObject({
    x: 137.23981389473073,
y: 364.1638243084863,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
SpikyBrushA_1: resolveDecalGameObject({
    x: 67.68192183867208,
y: 364.1638243084863,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushA
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":1280,"y":416,"width":264,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
// @ts-ignore
SlopeLeft: resolveSlopeLeft({"type":"SlopeLeft","x":1280,"y":384,"width":72,"height":32,"flippedX":false,"flippedY":false,"uid":"55845599_1","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":1056,"y":384,"width":224,"height":64,"flippedX":false,"flippedY":false,"uid":"55823268_2","name":"","depth":0}),
Player: {"type":"Player","x":1464,"y":416,"flippedX":false,"flippedY":false,"uid":"55988047_3","faceRight":false,"name":"","depth":0},
// @ts-ignore
Gate: resolveGate({"type":"Gate","x":1512,"y":384,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_4","levelName":"JungleFromDesert","checkpointName":"FromTown","name":"","depth":0}),
// @ts-ignore
Sign: resolveSign({"type":"Sign","x":1392,"y":416,"flippedX":false,"flippedY":false,"uid":"86706091_5","title":"Town","message":"This is the jungle town.","name":"","depth":0}),
// @ts-ignore
Door: resolveDoor({"type":"Door","x":1128,"y":352,"flippedX":false,"flippedY":false,"uid":"55913988_6","levelName":"JungleBar","checkpointName":"","name":"","depth":0}),
// @ts-ignore
PipeHorizontal: resolvePipeHorizontal({"type":"PipeHorizontal","x":1074,"y":328,"width":92,"flippedX":false,"flippedY":false,"uid":"55841307_7","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_1: resolvePipeHorizontal({"type":"PipeHorizontal","x":1096,"y":294,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_8","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_2: resolvePipeHorizontal({"type":"PipeHorizontal","x":992,"y":384,"width":64,"flippedX":false,"flippedY":false,"uid":"55841307_10","visible":true,"name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":864,"y":384,"width":128,"height":64,"flippedX":false,"flippedY":false,"uid":"55823268_11","name":"","depth":0}),
// @ts-ignore
SlopeLeft_1: resolveSlopeLeft({"type":"SlopeLeft","x":920,"y":376,"width":64,"height":32,"flippedX":false,"flippedY":false,"uid":"55845599_12","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":864,"y":376,"width":56,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_13","name":"","depth":0}),
// @ts-ignore
Door_1: resolveDoor({"type":"Door","x":888,"y":344,"flippedX":false,"flippedY":false,"uid":"55913988_14","levelName":"JungleInn","checkpointName":"","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_3: resolvePipeHorizontal({"type":"PipeHorizontal","x":892,"y":304,"width":72,"flippedX":false,"flippedY":false,"uid":"55841307_15","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_4: resolvePipeHorizontal({"type":"PipeHorizontal","x":768,"y":376,"width":96,"flippedX":false,"flippedY":false,"uid":"55841307_16","visible":true,"name":"","depth":0}),
// @ts-ignore
Block_4: resolveBlock({"type":"Block","x":640,"y":376,"width":128,"height":72,"flippedX":false,"flippedY":false,"uid":"55823268_17","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_5: resolvePipeHorizontal({"type":"PipeHorizontal","x":480,"y":384,"width":96,"flippedX":false,"flippedY":false,"uid":"55841307_18","visible":true,"name":"","depth":0}),
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":576,"y":376,"width":64,"height":32,"flippedX":false,"flippedY":false,"uid":"55824435_19","name":"","depth":0}),
// @ts-ignore
Block_5: resolveBlock({"type":"Block","x":576,"y":384,"width":104,"height":64,"flippedX":false,"flippedY":false,"uid":"55823268_20","name":"","depth":0}),
// @ts-ignore
Block_6: resolveBlock({"type":"Block","x":192,"y":384,"width":288,"height":64,"flippedX":false,"flippedY":false,"uid":"55823268_21","name":"","depth":0}),
// @ts-ignore
Pool: resolvePool({"type":"Pool","x":480,"y":416,"width":576,"height":32,"flippedX":false,"flippedY":false,"uid":"38353047_22","name":"","depth":2}),
// @ts-ignore
Door_2: resolveDoor({"type":"Door","x":352,"y":352,"flippedX":false,"flippedY":false,"uid":"55913988_23","levelName":"JungleTemple","checkpointName":"","name":"","depth":0}),
FromBar: {"type":"Checkpoint","x":1184,"y":384,"flippedX":false,"flippedY":false,"uid":"55940370_24","name":"FromBar","faceRight":true,"depth":0},
FromInn: {"type":"Checkpoint","x":868,"y":376,"flippedX":false,"flippedY":false,"uid":"55940370_25","name":"FromInn","faceRight":false,"depth":0},
FromTemple: {"type":"Checkpoint","x":408,"y":384,"flippedX":false,"flippedY":false,"uid":"55940370_26","name":"FromTemple","faceRight":true,"depth":0},
// @ts-ignore
PipeHorizontal_6: resolvePipeHorizontal({"type":"PipeHorizontal","x":232,"y":237,"width":35,"flippedX":false,"flippedY":false,"uid":"55841307_27","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_7: resolvePipeHorizontal({"type":"PipeHorizontal","x":414,"y":237,"width":35,"flippedX":false,"flippedY":false,"uid":"55841307_28","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_8: resolvePipeHorizontal({"type":"PipeHorizontal","x":267,"y":316,"width":147,"flippedX":false,"flippedY":false,"uid":"55841307_29","visible":false,"name":"","depth":0}),
// @ts-ignore
ValuableBlue: resolveValuableBlue({"type":"ValuableBlue","x":431,"y":160,"flippedX":false,"flippedY":false,"uid":"55991906_31","name":"","depth":0}),
// @ts-ignore
JungleTree: resolveJungleTree({"type":"JungleTree","x":1408,"y":456,"height":368,"flippedX":false,"flippedY":false,"uid":"25711099_32","name":"","depth":4}),
// @ts-ignore
JungleTree_1: resolveJungleTree({"type":"JungleTree","x":1200,"y":504,"height":368,"flippedX":false,"flippedY":false,"uid":"25711099_33","name":"","depth":4}),
// @ts-ignore
JungleTree_2: resolveJungleTree({"type":"JungleTree","x":1040,"y":472,"height":368,"flippedX":false,"flippedY":false,"uid":"25711099_34","name":"","depth":4}),
// @ts-ignore
JungleTree_3: resolveJungleTree({"type":"JungleTree","x":808,"y":496,"height":368,"flippedX":false,"flippedY":false,"uid":"25711099_35","name":"","depth":4}),
// @ts-ignore
JungleTree_4: resolveJungleTree({"type":"JungleTree","x":600,"y":496,"height":368,"flippedX":false,"flippedY":false,"uid":"25711099_36","name":"","depth":4}),
// @ts-ignore
JungleTree_5: resolveJungleTree({"type":"JungleTree","x":288,"y":504,"height":368,"flippedX":false,"flippedY":false,"uid":"25711099_37","name":"","depth":4}),
// @ts-ignore
JungleTree_6: resolveJungleTree({"type":"JungleTree","x":464,"y":504,"height":368,"flippedX":false,"flippedY":false,"uid":"25711099_38","name":"","depth":4}),
TempleLever: {"type":"Anchor","x":250,"y":237,"flippedX":false,"flippedY":false,"uid":"25979726_39","name":"TempleLever","depth":0},
// @ts-ignore
JungleOracle: resolveNpc({"type":"NpcIguana","x":720,"y":376,"flippedX":true,"flippedY":false,"uid":"26367058_40","name":"JungleOracle","style":13,"depth":0}),
// @ts-ignore
JungleTree_7: resolveJungleTree({"type":"JungleTree","x":1232,"y":384,"height":144,"flippedX":false,"flippedY":false,"uid":"25711099_41","name":"","depth":0}),
// @ts-ignore
JungleTree_8: resolveJungleTree({"type":"JungleTree","x":1432,"y":416,"height":144,"flippedX":false,"flippedY":false,"uid":"25711099_42","name":"","depth":0}),
// @ts-ignore
Block_7: resolveBlock({"type":"Block","x":576,"y":164,"width":104,"height":64,"flippedX":false,"flippedY":false,"uid":"55823268_44","name":"","depth":0}),
// @ts-ignore
Block_8: resolveBlock({"type":"Block","x":680,"y":176,"width":88,"height":52,"flippedX":false,"flippedY":false,"uid":"55823268_48","name":"","depth":0}),
// @ts-ignore
JungleTree_9: resolveJungleTree({"type":"JungleTree","x":614,"y":164,"height":144,"flippedX":false,"flippedY":false,"uid":"25711099_54","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_9: resolvePipeHorizontal({"type":"PipeHorizontal","x":496,"y":164,"width":80,"flippedX":false,"flippedY":false,"uid":"55841307_56","visible":true,"name":"","depth":0}),
// @ts-ignore
PipeLeftEnd: resolvePipeLeftEnd({"type":"PipeLeftEnd","x":496,"y":164,"flippedX":false,"flippedY":false,"uid":"63428932_57","name":"","depth":0}),
// @ts-ignore
BehindPillar: resolveRegion({"type":"Region","x":680,"y":120,"width":88,"height":64,"flippedX":false,"flippedY":false,"uid":"25971607_58","name":"BehindPillar","depth":0}),
// @ts-ignore
Block_9: resolveBlock({"type":"Block","x":680,"y":104,"width":88,"height":24,"flippedX":false,"flippedY":false,"uid":"55823268_59","name":"","depth":0}),
// @ts-ignore
Block_10: resolveBlock({"type":"Block","x":680,"y":128,"width":24,"height":64,"flippedX":false,"flippedY":false,"uid":"55823268_60","name":"","depth":0}),
// @ts-ignore
SlopeLeft_2: resolveSlopeLeft({"type":"SlopeLeft","x":696,"y":152,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55845599_61","name":"","depth":0}),
// @ts-ignore
SlopeLeft_3: resolveSlopeLeft({"type":"SlopeLeft","x":696,"y":120,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55845599_62","name":"","depth":0}),
// @ts-ignore
ValuableBlue_1: resolveValuableBlue({"type":"ValuableBlue","x":232,"y":40,"flippedX":false,"flippedY":false,"uid":"55991906_69","name":"","depth":0}),
// @ts-ignore
ValuableBlue_2: resolveValuableBlue({"type":"ValuableBlue","x":256,"y":40,"flippedX":false,"flippedY":false,"uid":"55991906_70","name":"","depth":0}),
// @ts-ignore
ValuableBlue_3: resolveValuableBlue({"type":"ValuableBlue","x":280,"y":40,"flippedX":false,"flippedY":false,"uid":"55991906_71","name":"","depth":0}),
// @ts-ignore
ValuableOrange: resolveValuableOrange({"type":"ValuableOrange","x":304,"y":40,"flippedX":false,"flippedY":false,"uid":"56004563_72","name":"","depth":0}),
// @ts-ignore
ValuableOrange_1: resolveValuableOrange({"type":"ValuableOrange","x":328,"y":40,"flippedX":false,"flippedY":false,"uid":"56004563_73","name":"","depth":0}),
// @ts-ignore
ValuableOrange_2: resolveValuableOrange({"type":"ValuableOrange","x":352,"y":40,"flippedX":false,"flippedY":false,"uid":"56004563_74","name":"","depth":0}),
// @ts-ignore
Block_11: resolveBlock({"type":"Block","x":32,"y":368,"width":160,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_75","name":"","depth":0}),
// @ts-ignore
HolyStump: resolveTreeStump({"type":"TreeStump","x":112,"y":368,"flippedX":false,"flippedY":false,"uid":"77429484_76","levelName":"JungleBossArena","checkpointName":"Stump","name":"HolyStump","depth":0,"faceRight":false}),
// @ts-ignore
Pool_1: resolvePool({"type":"Pool","x":32,"y":408,"width":160,"height":40,"flippedX":false,"flippedY":false,"uid":"38353047_77","name":"","depth":3}),
// @ts-ignore
SlopeLeft_4: resolveSlopeLeft({"type":"SlopeLeft","x":192,"y":368,"width":64,"height":32,"flippedX":false,"flippedY":false,"uid":"55845599_78","name":"","depth":0}),
// @ts-ignore
SlopeRight_1: resolveSlopeRight({"type":"SlopeRight","x":168,"y":392,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_81","name":"","depth":0}),
// @ts-ignore
JungleTree_10: resolveJungleTree({"type":"JungleTree","x":168,"y":370,"height":104,"flippedX":false,"flippedY":false,"uid":"25711099_84","name":"","depth":0}),
// @ts-ignore
JungleTree_11: resolveJungleTree({"type":"JungleTree","x":64,"y":488,"height":368,"flippedX":false,"flippedY":false,"uid":"25711099_85","name":"","depth":4}),
// @ts-ignore
SlopeLeft_5: resolveSlopeLeft({"type":"SlopeLeft","x":40,"y":392,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55845599_87","name":"","depth":0}),
// @ts-ignore
Block_12: resolveBlock({"type":"Block","x":32,"y":400,"width":16,"height":48,"flippedX":false,"flippedY":false,"uid":"55823268_88","name":"","depth":0}),
SpiritSpawn: {"type":"Anchor","x":1148,"y":328,"flippedX":false,"flippedY":false,"uid":"25979726_89","name":"SpiritSpawn","depth":0},
FromGiants: {"type":"Checkpoint","x":1024,"y":24,"flippedX":false,"flippedY":false,"uid":"55940370_90","name":"FromGiants","faceRight":false,"depth":0},
// @ts-ignore
Block_13: resolveBlock({"type":"Block","x":0,"y":0,"width":32,"height":448,"flippedX":false,"flippedY":false,"uid":"55823268_91","name":"","depth":0})
};
}
};

export const OversizedClownArenaArgs = {
    width: 848,
height: 256,
gameObjectsSupplier: () => {
  return {
    PoppingRocksBox: resolveDecalGameObject({
    x: 704,
y: 226,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: PoppingRocksBox
}),
Cobweb: resolveDecalGameObject({
    x: 436,
y: 20,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: Cobweb
}),
VineSmall: resolveDecalGameObject({
    x: 34,
y: 60,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "TerrainDecals",
texture: VineSmall
}),
DesertGlow: resolveDecalGameObject({
    x: 848,
y: 200,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 3,
rotation: 0,
layerName: "BackgroundDecals",
texture: GlowingCircle
}),
JungleGlow: resolveDecalGameObject({
    x: 0,
y: 88,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 3,
rotation: 0,
layerName: "BackgroundDecals",
texture: GlowingCircle
}),
Cobweb_1: resolveDecalGameObject({
    x: 88,
y: 216,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Cobweb
}),
CracksA: resolveDecalGameObject({
    x: 376,
y: 40,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CracksA
}),
CracksA_1: resolveDecalGameObject({
    x: 624,
y: 200,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CracksA
}),
CracksA_2: resolveDecalGameObject({
    x: 184,
y: 200,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: -1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CracksA
}),
CracksA_3: resolveDecalGameObject({
    x: 104,
y: 32,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: CracksA
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":80,"y":224,"width":768,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
Player: {"type":"Player","x":776,"y":224,"flippedX":false,"flippedY":false,"uid":"55988047_1","faceRight":false,"name":"","depth":0},
// @ts-ignore
SlopeLeft: resolveSlopeLeft({"type":"SlopeLeft","x":416,"y":0,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55845599_2","name":"","depth":0}),
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":384,"y":0,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_3","name":"","depth":0}),
// @ts-ignore
SlopeLeft_1: resolveSlopeLeft({"type":"SlopeLeft","x":248,"y":0,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55845599_4","name":"","depth":0}),
// @ts-ignore
SlopeRight_1: resolveSlopeRight({"type":"SlopeRight","x":216,"y":0,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_5","name":"","depth":0}),
// @ts-ignore
PipeHorizontal: resolvePipeHorizontal({"type":"PipeHorizontal","x":80,"y":152,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_6","visible":true,"name":"","depth":0}),
// @ts-ignore
PipeRightEnd: resolvePipeRightEnd({"type":"PipeRightEnd","x":112,"y":152,"flippedX":false,"flippedY":false,"uid":"63418353_7","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":712,"y":112,"width":136,"height":64,"flippedX":false,"flippedY":false,"uid":"55823268_9","name":"","depth":0}),
// @ts-ignore
Gate: resolveGate({"type":"Gate","x":824,"y":192,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_11","levelName":"DesertTown","checkpointName":"FromArena","name":"","depth":0}),
// @ts-ignore
RightBossWall: resolveBlock({"type":"Block","x":672,"y":152,"width":16,"height":72,"flippedX":false,"flippedY":false,"uid":"55823268_12","name":"RightBossWall","depth":0}),
// @ts-ignore
SlopeRight_2: resolveSlopeRight({"type":"SlopeRight","x":592,"y":112,"width":120,"height":64,"flippedX":false,"flippedY":true,"uid":"55824435_13","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":592,"y":0,"width":256,"height":112,"flippedX":false,"flippedY":false,"uid":"55823268_14","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":0,"y":112,"width":80,"height":144,"flippedX":false,"flippedY":false,"uid":"55823268_15","name":"","depth":0}),
// @ts-ignore
Block_4: resolveBlock({"type":"Block","x":0,"y":32,"width":48,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_18","name":"","depth":0}),
// @ts-ignore
LeftBossWall: resolveBlock({"type":"Block","x":64,"y":32,"width":16,"height":80,"flippedX":false,"flippedY":false,"uid":"55823268_21","name":"LeftBossWall","depth":0}),
// @ts-ignore
Block_5: resolveBlock({"type":"Block","x":0,"y":0,"width":80,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_22","name":"","depth":0}),
// @ts-ignore
SlopeLeft_2: resolveSlopeLeft({"type":"SlopeLeft","x":48,"y":32,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55845599_23","name":"","depth":0}),
// @ts-ignore
Gate_1: resolveGate({"type":"Gate","x":0,"y":80,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_25","levelName":"JungleFromDesert","checkpointName":"FromCave","name":"","depth":0}),
FromJungle: {"type":"Checkpoint","x":64,"y":112,"flippedX":false,"flippedY":false,"uid":"55940370_26","name":"FromJungle","faceRight":true,"depth":0},
DefeatedBoss: {"type":"Checkpoint","x":344,"y":224,"flippedX":false,"flippedY":false,"uid":"55940370_27","name":"DefeatedBoss","faceRight":true,"depth":0}
};
}
};

export const UnrealBallsArgs = {
    width: 256,
height: 256,
gameObjectsSupplier: () => {
  return {
    // @ts-ignore
Block: resolveBlock({"type":"Block","x":0,"y":208,"width":256,"height":48,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":0,"y":0,"width":256,"height":64,"flippedX":false,"flippedY":false,"uid":"55823268_1","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":0,"y":32,"width":32,"height":192,"flippedX":false,"flippedY":false,"uid":"55823268_2","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":224,"y":32,"width":32,"height":192,"flippedX":false,"flippedY":false,"uid":"55823268_3","name":"","depth":0}),
Player: {"type":"Player","x":120,"y":208,"flippedX":false,"flippedY":false,"uid":"55988047_4","faceRight":true,"name":"","depth":0},
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":192,"y":176,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55824435_5","name":"","depth":0}),
// @ts-ignore
Block_4: resolveBlock({"type":"Block","x":32,"y":48,"width":48,"height":48,"flippedX":false,"flippedY":false,"uid":"55823268_6","name":"","depth":0}),
// @ts-ignore
Spike: resolveSpike({"type":"Spike","x":211,"y":104,"flippedX":false,"flippedY":false,"uid":"35514037_8","name":"","depth":0}),
// @ts-ignore
Spike_1: resolveSpike({"type":"Spike","x":32,"y":96,"flippedX":false,"flippedY":false,"uid":"35514037_9","name":"","depth":0}),
// @ts-ignore
Spike_2: resolveSpike({"type":"Spike","x":32,"y":194,"flippedX":false,"flippedY":false,"uid":"35514037_11","name":"","depth":0}),
// @ts-ignore
Spike_3: resolveSpike({"type":"Spike","x":88,"y":136,"flippedX":false,"flippedY":false,"uid":"35514037_12","name":"","depth":0}),
// @ts-ignore
Spike_4: resolveSpike({"type":"Spike","x":160,"y":194,"flippedX":false,"flippedY":false,"uid":"35514037_13","name":"","depth":0})
};
}
};

export const UnrealBlindArgs = {
    width: 768,
height: 256,
gameObjectsSupplier: () => {
  return {
    // @ts-ignore
PortalFluid: resolvePortalFluid({"type":"PortalFluid","x":-8,"y":240,"width":808,"height":24,"flippedX":false,"flippedY":false,"uid":"24775263_0","name":"","depth":0}),
Player: {"type":"Player","x":56,"y":56,"flippedX":false,"flippedY":false,"uid":"55988047_1","faceRight":false,"name":"","depth":0},
// @ts-ignore
Block: resolveBlock({"type":"Block","x":40,"y":176,"width":40,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_2","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":168,"y":112,"width":56,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_3","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":136,"y":176,"width":32,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_4","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":280,"y":208,"width":136,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_5","name":"","depth":0}),
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":328,"y":176,"width":88,"height":32,"flippedX":false,"flippedY":false,"uid":"55824435_6","name":"","depth":0}),
// @ts-ignore
Block_4: resolveBlock({"type":"Block","x":416,"y":176,"width":16,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_7","name":"","depth":0})
};
}
};

export const UnrealClownDodgerArgs = {
    width: 912,
height: 256,
gameObjectsSupplier: () => {
  return {
    GroundSpeckles: resolveDecalGameObject({
    x: 795,
y: 236,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":80,"y":224,"width":912,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
Player: {"type":"Player","x":32,"y":104,"flippedX":false,"flippedY":false,"uid":"55988047_1","faceRight":false,"name":"","depth":0},
// @ts-ignore
PortalFluid: resolvePortalFluid({"type":"PortalFluid","x":0,"y":224,"width":80,"height":80,"flippedX":false,"flippedY":false,"uid":"24775263_15","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":0,"y":104,"width":80,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_16","name":"","depth":0}),
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":0,"y":120,"width":40,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_17","name":"","depth":0}),
// @ts-ignore
SlopeLeft: resolveSlopeLeft({"type":"SlopeLeft","x":40,"y":120,"width":40,"height":32,"flippedX":false,"flippedY":true,"uid":"55845599_18","name":"","depth":0}),
// @ts-ignore
SlopeRight_1: resolveSlopeRight({"type":"SlopeRight","x":312,"y":0,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_19","name":"","depth":0}),
// @ts-ignore
SlopeLeft_1: resolveSlopeLeft({"type":"SlopeLeft","x":344,"y":0,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55845599_20","name":"","depth":0}),
// @ts-ignore
SlopeRight_2: resolveSlopeRight({"type":"SlopeRight","x":576,"y":0,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_21","name":"","depth":0}),
// @ts-ignore
SlopeLeft_2: resolveSlopeLeft({"type":"SlopeLeft","x":608,"y":0,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55845599_22","name":"","depth":0})
};
}
};

export const UnrealDrawingArgs = {
    width: 256,
height: 256,
gameObjectsSupplier: () => {
  return {
    // @ts-ignore
Block: resolveBlock({"type":"Block","x":0,"y":0,"width":256,"height":24,"flippedX":false,"flippedY":false,"uid":"55823268_1","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":0,"y":24,"width":24,"height":208,"flippedX":false,"flippedY":false,"uid":"55823268_2","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":0,"y":232,"width":256,"height":24,"flippedX":false,"flippedY":false,"uid":"55823268_3","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":232,"y":24,"width":24,"height":208,"flippedX":false,"flippedY":false,"uid":"55823268_4","name":"","depth":0}),
Player: {"type":"Player","x":200,"y":64,"flippedX":false,"flippedY":false,"uid":"55988047_5","faceRight":false,"name":"","depth":0},
// @ts-ignore
Block_4: resolveBlock({"type":"Block","x":176,"y":64,"width":72,"height":24,"flippedX":false,"flippedY":false,"uid":"55823268_7","name":"","depth":0}),
// @ts-ignore
Path: resolvePath({"type":"Path","x":48,"y":104,"flippedX":false,"flippedY":false,"uid":"02678853_8","nodes":[{"x":48,"y":48},{"x":72,"y":48},{"x":72,"y":104},{"x":216,"y":104},{"x":216,"y":216},{"x":48,"y":216},{"x":48,"y":160},{"x":152,"y":160},{"x":152,"y":48}],"name":"","depth":0}),
// @ts-ignore
Block_5: resolveBlock({"type":"Block","x":24,"y":128,"width":16,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_9","name":"","depth":0}),
// @ts-ignore
Block_6: resolveBlock({"type":"Block","x":176,"y":184,"width":16,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_10","name":"","depth":0})
};
}
};

export const UnrealDuckStumpArgs = {
    width: 256,
height: 1016,
gameObjectsSupplier: () => {
  return {
    // @ts-ignore
Block: resolveBlock({"type":"Block","x":56,"y":288,"width":16,"height":72,"flippedX":false,"flippedY":false,"uid":"55823268_1","name":"","depth":0}),
// @ts-ignore
PipeHorizontal: resolvePipeHorizontal({"type":"PipeHorizontal","x":72,"y":288,"width":80,"flippedX":false,"flippedY":false,"uid":"55841307_2","visible":true,"name":"","depth":0}),
// @ts-ignore
PipeRightEnd: resolvePipeRightEnd({"type":"PipeRightEnd","x":152,"y":288,"flippedX":false,"flippedY":false,"uid":"63418353_3","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_1: resolvePipeHorizontal({"type":"PipeHorizontal","x":24,"y":288,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_4","visible":true,"name":"","depth":0}),
Player: {"type":"Player","x":192,"y":176,"flippedX":false,"flippedY":false,"uid":"55988047_6","faceRight":false,"name":"","depth":0},
// @ts-ignore
PipeHorizontal_2: resolvePipeHorizontal({"type":"PipeHorizontal","x":0,"y":176,"width":256,"flippedX":false,"flippedY":false,"uid":"55841307_9","visible":true,"name":"","depth":0}),
// @ts-ignore
TreeStumpDestructive: resolveTreeStumpDestructive({"type":"TreeStumpDestructive","x":64,"y":176,"flippedX":false,"flippedY":false,"uid":"36360904_10","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_3: resolvePipeHorizontal({"type":"PipeHorizontal","x":0,"y":224,"width":256,"flippedX":false,"flippedY":false,"uid":"55841307_11","visible":true,"name":"","depth":0}),
// @ts-ignore
TreeStumpDestructive_1: resolveTreeStumpDestructive({"type":"TreeStumpDestructive","x":224,"y":224,"flippedX":false,"flippedY":false,"uid":"36360904_12","name":"","depth":0}),
// @ts-ignore
Spike: resolveSpike({"type":"Spike","x":232,"y":240,"flippedX":false,"flippedY":false,"uid":"35514037_13","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_4: resolvePipeHorizontal({"type":"PipeHorizontal","x":0,"y":360,"width":256,"flippedX":false,"flippedY":false,"uid":"55841307_14","visible":true,"name":"","depth":0}),
// @ts-ignore
TreeStumpDestructive_2: resolveTreeStumpDestructive({"type":"TreeStumpDestructive","x":24,"y":360,"flippedX":false,"flippedY":false,"uid":"36360904_15","name":"","depth":0}),
// @ts-ignore
PipeLeftEnd: resolvePipeLeftEnd({"type":"PipeLeftEnd","x":24,"y":288,"flippedX":false,"flippedY":false,"uid":"63428932_19","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":112,"y":440,"width":16,"height":248,"flippedX":false,"flippedY":false,"uid":"55823268_20","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_5: resolvePipeHorizontal({"type":"PipeHorizontal","x":0,"y":440,"width":112,"flippedX":false,"flippedY":false,"uid":"55841307_21","visible":true,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_6: resolvePipeHorizontal({"type":"PipeHorizontal","x":128,"y":440,"width":128,"flippedX":false,"flippedY":false,"uid":"55841307_22","visible":true,"name":"","depth":0}),
// @ts-ignore
TreeStumpDestructive_3: resolveTreeStumpDestructive({"type":"TreeStumpDestructive","x":208,"y":440,"flippedX":false,"flippedY":false,"uid":"36360904_23","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_7: resolvePipeHorizontal({"type":"PipeHorizontal","x":0,"y":480,"width":112,"flippedX":false,"flippedY":false,"uid":"55841307_24","visible":true,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_8: resolvePipeHorizontal({"type":"PipeHorizontal","x":128,"y":480,"width":128,"flippedX":false,"flippedY":false,"uid":"55841307_25","visible":true,"name":"","depth":0}),
// @ts-ignore
TreeStumpDestructive_4: resolveTreeStumpDestructive({"type":"TreeStumpDestructive","x":160,"y":480,"flippedX":false,"flippedY":false,"uid":"36360904_26","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_9: resolvePipeHorizontal({"type":"PipeHorizontal","x":0,"y":512,"width":112,"flippedX":false,"flippedY":false,"uid":"55841307_27","visible":true,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_10: resolvePipeHorizontal({"type":"PipeHorizontal","x":128,"y":512,"width":128,"flippedX":false,"flippedY":false,"uid":"55841307_28","visible":true,"name":"","depth":0}),
// @ts-ignore
TreeStumpDestructive_5: resolveTreeStumpDestructive({"type":"TreeStumpDestructive","x":72,"y":512,"flippedX":false,"flippedY":false,"uid":"36360904_29","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_11: resolvePipeHorizontal({"type":"PipeHorizontal","x":0,"y":560,"width":112,"flippedX":false,"flippedY":false,"uid":"55841307_30","visible":true,"name":"","depth":0}),
// @ts-ignore
TreeStumpDestructive_6: resolveTreeStumpDestructive({"type":"TreeStumpDestructive","x":56,"y":560,"flippedX":false,"flippedY":false,"uid":"36360904_32","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_12: resolvePipeHorizontal({"type":"PipeHorizontal","x":24,"y":688,"width":248,"flippedX":false,"flippedY":false,"uid":"55841307_33","visible":true,"name":"","depth":0}),
// @ts-ignore
CommonClown: resolveCommonClown({"type":"CommonClown","x":144,"y":656,"flippedX":false,"flippedY":false,"uid":"68762216_36","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_13: resolvePipeHorizontal({"type":"PipeHorizontal","x":0,"y":744,"width":256,"flippedX":false,"flippedY":false,"uid":"55841307_39","visible":true,"name":"","depth":0}),
// @ts-ignore
ClownActivator: resolveTreeStumpDestructive({"type":"TreeStumpDestructive","x":72,"y":688,"flippedX":false,"flippedY":false,"uid":"36360904_40","name":"ClownActivator","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":240,"y":584,"width":16,"height":104,"flippedX":false,"flippedY":false,"uid":"55823268_43","name":"","depth":0}),
// @ts-ignore
CommonClown_1: resolveCommonClown({"type":"CommonClown","x":176,"y":672,"flippedX":false,"flippedY":false,"uid":"68762216_49","name":"","depth":0}),
// @ts-ignore
CommonClown_2: resolveCommonClown({"type":"CommonClown","x":208,"y":648,"flippedX":false,"flippedY":false,"uid":"68762216_50","name":"","depth":0}),
// @ts-ignore
TreeStumpDestructive_7: resolveTreeStumpDestructive({"type":"TreeStumpDestructive","x":184,"y":744,"flippedX":false,"flippedY":false,"uid":"36360904_51","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_14: resolvePipeHorizontal({"type":"PipeHorizontal","x":-16,"y":688,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_52","visible":true,"name":"","depth":0}),
// @ts-ignore
PipeRightEnd_1: resolvePipeRightEnd({"type":"PipeRightEnd","x":16,"y":688,"flippedX":false,"flippedY":false,"uid":"63418353_53","name":"","depth":0}),
// @ts-ignore
PipeLeftEnd_1: resolvePipeLeftEnd({"type":"PipeLeftEnd","x":24,"y":688,"flippedX":false,"flippedY":false,"uid":"63428932_54","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_15: resolvePipeHorizontal({"type":"PipeHorizontal","x":33,"y":814,"width":224,"flippedX":false,"flippedY":false,"uid":"55841307_55","visible":true,"name":"","depth":0}),
// @ts-ignore
PipeLeftEnd_2: resolvePipeLeftEnd({"type":"PipeLeftEnd","x":33,"y":814,"flippedX":false,"flippedY":false,"uid":"63428932_56","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_16: resolvePipeHorizontal({"type":"PipeHorizontal","x":0,"y":856,"width":256,"flippedX":false,"flippedY":false,"uid":"55841307_57","visible":true,"name":"","depth":0}),
// @ts-ignore
FinalStump: resolveTreeStumpDestructive({"type":"TreeStumpDestructive","x":216,"y":856,"flippedX":false,"flippedY":false,"uid":"36360904_58","name":"FinalStump","depth":0}),
// @ts-ignore
PipeHorizontal_17: resolvePipeHorizontal({"type":"PipeHorizontal","x":0,"y":798,"width":232,"flippedX":false,"flippedY":false,"uid":"55841307_59","visible":true,"name":"","depth":0}),
// @ts-ignore
PipeRightEnd_2: resolvePipeRightEnd({"type":"PipeRightEnd","x":231,"y":798,"flippedX":false,"flippedY":false,"uid":"63418353_60","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_18: resolvePipeHorizontal({"type":"PipeHorizontal","x":26,"y":782,"width":232,"flippedX":false,"flippedY":false,"uid":"55841307_61","visible":true,"name":"","depth":0}),
// @ts-ignore
PipeLeftEnd_3: resolvePipeLeftEnd({"type":"PipeLeftEnd","x":26,"y":782,"flippedX":false,"flippedY":false,"uid":"63428932_62","name":"","depth":0}),
// @ts-ignore
HiddenBlock: resolveBlock({"type":"Block","x":128,"y":688,"width":112,"height":8,"flippedX":false,"flippedY":false,"uid":"55823268_63","name":"HiddenBlock","depth":0}),
// @ts-ignore
ValuableOrange: resolveValuableOrange({"type":"ValuableOrange","x":72,"y":928,"flippedX":false,"flippedY":false,"uid":"56004563_64","name":"","depth":0}),
// @ts-ignore
ValuableOrange_1: resolveValuableOrange({"type":"ValuableOrange","x":72,"y":944,"flippedX":false,"flippedY":false,"uid":"56004563_65","name":"","depth":0}),
// @ts-ignore
ValuableOrange_2: resolveValuableOrange({"type":"ValuableOrange","x":72,"y":960,"flippedX":false,"flippedY":false,"uid":"56004563_66","name":"","depth":0}),
// @ts-ignore
ValuableOrange_3: resolveValuableOrange({"type":"ValuableOrange","x":72,"y":976,"flippedX":false,"flippedY":false,"uid":"56004563_67","name":"","depth":0}),
// @ts-ignore
Portal: resolvePortalFluid({"type":"PortalFluid","x":-24,"y":-264,"width":312,"height":312,"flippedX":false,"flippedY":false,"uid":"24775263_69","name":"Portal","depth":0}),
KeyPiece: {"type":"Anchor","x":204,"y":976,"flippedX":false,"flippedY":false,"uid":"25979726_70","name":"KeyPiece","depth":0},
StumpBallonPosition: {"type":"Anchor","x":24,"y":856,"flippedX":false,"flippedY":false,"uid":"25979726_71","name":"StumpBallonPosition","depth":0}
};
}
};

export const UnrealFlightArgs = {
    width: 728,
height: 448,
gameObjectsSupplier: () => {
  return {
    SpikyBrushA: resolveDecalGameObject({
    x: 40,
y: 394,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SpikyBrushA
}),
SmallDecorativeRock: resolveDecalGameObject({
    x: 62,
y: 394,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_1: resolveDecalGameObject({
    x: 24,
y: 393,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SmallDecorativeRock
}),
SpikyBrushB: resolveDecalGameObject({
    x: 144,
y: 378,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: SpikyBrushB
}),
Rainbow2: resolveDecalGameObject({
    x: 9,
y: 422,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Rainbow2
}),
Rainbow1: resolveDecalGameObject({
    x: 19,
y: 494,
originX: 0,
originY: 0,
scaleX: -1,
scaleY: -1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Rainbow1
}),
Rainbow1_1: resolveDecalGameObject({
    x: 143,
y: 370,
originX: 0,
originY: 0,
scaleX: -1,
scaleY: -1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Rainbow1
}),
Rainbow2_1: resolveDecalGameObject({
    x: 133,
y: 298,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Rainbow2
}),
Rainbow2_2: resolveDecalGameObject({
    x: 71,
y: 360,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Rainbow2
}),
Rainbow1_2: resolveDecalGameObject({
    x: 81,
y: 432,
originX: 0,
originY: 0,
scaleX: -1,
scaleY: -1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Rainbow1
}),
ColorfulBricks: resolveDecalGameObject({
    x: 0,
y: 32,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: ColorfulBricks
}),
ColorfulBricks_1: resolveDecalGameObject({
    x: 32,
y: 32,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: ColorfulBricks
}),
ColorfulBricks_2: resolveDecalGameObject({
    x: 32,
y: 50,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: ColorfulBricks
}),
ColorfulBricks_3: resolveDecalGameObject({
    x: 80,
y: 50,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: ColorfulBricks
}),
ColorfulBricks_4: resolveDecalGameObject({
    x: 80,
y: 32,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: ColorfulBricks
}),
ColorfulBricks_5: resolveDecalGameObject({
    x: 48,
y: 32,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: ColorfulBricks
}),
ColorfulBricks_6: resolveDecalGameObject({
    x: -32,
y: 32,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: ColorfulBricks
}),
ColorfulBricks_7: resolveDecalGameObject({
    x: -32,
y: 50,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: ColorfulBricks
}),
ColorfulBricks_8: resolveDecalGameObject({
    x: 112,
y: 32,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: ColorfulBricks
}),
ColorfulBricks_9: resolveDecalGameObject({
    x: 144,
y: 32,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: ColorfulBricks
}),
ColorfulBricks_10: resolveDecalGameObject({
    x: 144,
y: 50,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: ColorfulBricks
}),
ColorfulBricks_11: resolveDecalGameObject({
    x: 96,
y: 50,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: ColorfulBricks
}),
ColorfulBricks_12: resolveDecalGameObject({
    x: 96,
y: 32,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: ColorfulBricks
}),
ColorfulBricks_13: resolveDecalGameObject({
    x: 16,
y: 116,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: ColorfulBricks
}),
ColorfulBricks_14: resolveDecalGameObject({
    x: 0,
y: 98,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: ColorfulBricks
}),
ColorfulBricks_15: resolveDecalGameObject({
    x: -32,
y: 68,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: ColorfulBricks
}),
ColorfulBricks_16: resolveDecalGameObject({
    x: 48,
y: 68,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: ColorfulBricks
}),
ColorfulBricks_17: resolveDecalGameObject({
    x: 32,
y: 86,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: ColorfulBricks
}),
ColorfulBricks_18: resolveDecalGameObject({
    x: 32,
y: 68,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: ColorfulBricks
}),
ColorfulBricks_19: resolveDecalGameObject({
    x: 0,
y: 68,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: ColorfulBricks
}),
Cobweb: resolveDecalGameObject({
    x: 24,
y: 40,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Cobweb
}),
Cobweb_1: resolveDecalGameObject({
    x: 160,
y: 40,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Cobweb
}),
ColorfulBricks_20: resolveDecalGameObject({
    x: 32,
y: 140,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: ColorfulBricks
}),
FlyCage: resolveDecalGameObject({
    x: 104,
y: 104,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: FlyCage
}),
FlyCageBroken: resolveDecalGameObject({
    x: 152,
y: 104,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: FlyCageBroken
}),
FlyCage_1: resolveDecalGameObject({
    x: 128,
y: 104,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: FlyCage
}),
LightShelf: resolveDecalGameObject({
    x: 40,
y: 68,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: LightShelf
}),
RoseVase: resolveDecalGameObject({
    x: 33,
y: 69,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: RoseVase
}),
ColorfulBricks_21: resolveDecalGameObject({
    x: 0,
y: 158,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: ColorfulBricks
}),
Pipe: resolveDecalGameObject({
    x: 96,
y: 24,
originX: 1,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Pipe
}),
OverheadLamp: resolveDecalGameObject({
    x: 96,
y: 46,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: OverheadLamp
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":0,"y":392,"width":152,"height":56,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":152,"y":264,"width":32,"height":184,"flippedX":false,"flippedY":false,"uid":"55823268_1","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":152,"y":120,"width":32,"height":64,"flippedX":false,"flippedY":false,"uid":"55823268_2","name":"","depth":0}),
Player: {"type":"Player","x":104,"y":392,"flippedX":false,"flippedY":false,"uid":"55988047_3","faceRight":true,"name":"","depth":0},
// @ts-ignore
PortalFluid: resolvePortalFluid({"type":"PortalFluid","x":184,"y":136,"width":224,"height":32,"flippedX":false,"flippedY":false,"uid":"24775263_4","name":"","depth":0}),
// @ts-ignore
PortalFluid_1: resolvePortalFluid({"type":"PortalFluid","x":184,"y":280,"width":160,"height":168,"flippedX":false,"flippedY":false,"uid":"24775263_5","name":"","depth":0}),
// @ts-ignore
PortalFluid_2: resolvePortalFluid({"type":"PortalFluid","x":408,"y":136,"width":232,"height":208,"flippedX":false,"flippedY":false,"uid":"24775263_6","name":"","depth":0}),
// @ts-ignore
PortalFluid_3: resolvePortalFluid({"type":"PortalFluid","x":344,"y":416,"width":384,"height":32,"flippedX":false,"flippedY":false,"uid":"24775263_7","name":"","depth":0}),
// @ts-ignore
PortalFluid_4: resolvePortalFluid({"type":"PortalFluid","x":440,"y":328,"width":200,"height":24,"flippedX":false,"flippedY":false,"uid":"24775263_9","name":"","depth":0}),
// @ts-ignore
BigKeyPiece: resolveRegion({"type":"Region","x":643,"y":144,"width":50,"height":8,"flippedX":false,"flippedY":false,"uid":"25971607_11","name":"BigKeyPiece","depth":0}),
// @ts-ignore
CameraUnlockRegion: resolveRegion({"type":"Region","x":16,"y":104,"width":40,"height":32,"flippedX":false,"flippedY":false,"uid":"25971607_12","name":"CameraUnlockRegion","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":72,"y":104,"width":112,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_13","name":"","depth":0}),
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":0,"y":0,"width":92,"height":32,"flippedX":false,"flippedY":false,"uid":"55824435_17","name":"","depth":0}),
// @ts-ignore
SlopeLeft: resolveSlopeLeft({"type":"SlopeLeft","x":92,"y":0,"width":92,"height":32,"flippedX":false,"flippedY":false,"uid":"55845599_18","name":"","depth":0}),
// @ts-ignore
Block_4: resolveBlock({"type":"Block","x":168,"y":32,"width":16,"height":72,"flippedX":false,"flippedY":false,"uid":"55823268_19","name":"","depth":0}),
// @ts-ignore
Block_5: resolveBlock({"type":"Block","x":0,"y":32,"width":16,"height":88,"flippedX":false,"flippedY":false,"uid":"55823268_20","name":"","depth":0}),
FireflySpawn: {"type":"Anchor","x":152,"y":72,"flippedX":false,"flippedY":false,"uid":"25979726_21","name":"FireflySpawn","depth":0},
// @ts-ignore
PortalFluid_5: resolvePortalFluid({"type":"PortalFluid","x":184,"y":32,"width":456,"height":104,"flippedX":false,"flippedY":false,"uid":"24775263_23","name":"","depth":0}),
// @ts-ignore
PortalFluid_6: resolvePortalFluid({"type":"PortalFluid","x":464,"y":0,"width":176,"height":32,"flippedX":false,"flippedY":false,"uid":"24775263_24","name":"","depth":0}),
// @ts-ignore
PortalFluid_7: resolvePortalFluid({"type":"PortalFluid","x":696,"y":0,"width":32,"height":416,"flippedX":false,"flippedY":false,"uid":"24775263_25","name":"","depth":0})
};
}
};

export const UnrealMimicArgs = {
    width: 256,
height: 256,
gameObjectsSupplier: () => {
  return {
    // @ts-ignore
PlayerFloorBlock: resolveBlock({"type":"Block","x":48,"y":120,"width":160,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_8","name":"PlayerFloorBlock","depth":0}),
// @ts-ignore
PortalFluid: resolvePortalFluid({"type":"PortalFluid","x":0,"y":56,"width":48,"height":144,"flippedX":false,"flippedY":false,"uid":"24775263_10","name":"","depth":0}),
// @ts-ignore
PortalFluid_1: resolvePortalFluid({"type":"PortalFluid","x":208,"y":56,"width":48,"height":144,"flippedX":false,"flippedY":false,"uid":"24775263_11","name":"","depth":0}),
Player: {"type":"Player","x":128,"y":120,"flippedX":false,"flippedY":false,"uid":"55988047_12","faceRight":true,"name":"","depth":0},
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":48,"y":200,"width":80,"height":56,"flippedX":false,"flippedY":true,"uid":"55824435_13","name":"","depth":0}),
// @ts-ignore
SlopeLeft: resolveSlopeLeft({"type":"SlopeLeft","x":128,"y":200,"width":80,"height":56,"flippedX":false,"flippedY":true,"uid":"55845599_14","name":"","depth":0}),
// @ts-ignore
SlopeLeft_1: resolveSlopeLeft({"type":"SlopeLeft","x":128,"y":0,"width":80,"height":56,"flippedX":false,"flippedY":false,"uid":"55845599_15","name":"","depth":0}),
// @ts-ignore
SlopeRight_1: resolveSlopeRight({"type":"SlopeRight","x":48,"y":0,"width":80,"height":56,"flippedX":false,"flippedY":false,"uid":"55824435_16","name":"","depth":0}),
// @ts-ignore
Mimic: resolveNpc({"type":"NpcIguana","x":128,"y":200,"flippedX":false,"flippedY":false,"uid":"26367058_17","name":"Mimic","style":0,"depth":0}),
// @ts-ignore
SlopeRight_2: resolveSlopeRight({"type":"SlopeRight","x":208,"y":0,"width":80,"height":56,"flippedX":false,"flippedY":false,"uid":"55824435_19","name":"","depth":0}),
// @ts-ignore
SlopeLeft_2: resolveSlopeLeft({"type":"SlopeLeft","x":-32,"y":0,"width":80,"height":56,"flippedX":false,"flippedY":false,"uid":"55845599_20","name":"","depth":0}),
// @ts-ignore
SlopeRight_3: resolveSlopeRight({"type":"SlopeRight","x":208,"y":200,"width":80,"height":56,"flippedX":false,"flippedY":true,"uid":"55824435_21","name":"","depth":0}),
// @ts-ignore
SlopeLeft_3: resolveSlopeLeft({"type":"SlopeLeft","x":-32,"y":200,"width":80,"height":56,"flippedX":false,"flippedY":true,"uid":"55845599_22","name":"","depth":0}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":120,"y":40,"width":16,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_23","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":120,"y":200,"width":16,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_24","name":"","depth":0}),
// @ts-ignore
BigKeyPiece: resolveRegion({"type":"Region","x":56,"y":152,"width":50,"height":8,"flippedX":false,"flippedY":false,"uid":"25971607_25","name":"BigKeyPiece","depth":0})
};
}
};

export const UnrealRoyalChamberArgs = {
    width: 1248,
height: 256,
gameObjectsSupplier: () => {
  return {
    Column: resolveDecalGameObject({
    x: 704,
y: 96,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 2.05,
rotation: 0,
layerName: "FrontDecals",
texture: Column
}),
Column_1: resolveDecalGameObject({
    x: 832,
y: 96,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 2.05,
rotation: 0,
layerName: "FrontDecals",
texture: Column
}),
Column_2: resolveDecalGameObject({
    x: 464,
y: 96,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 2.05,
rotation: 0,
layerName: "FrontDecals",
texture: Column
}),
Column_3: resolveDecalGameObject({
    x: 336,
y: 96,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 2.05,
rotation: 0,
layerName: "FrontDecals",
texture: Column
}),
Column_4: resolveDecalGameObject({
    x: 240,
y: 96,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 2.05,
rotation: 0,
layerName: "FrontDecals",
texture: Column
}),
Column_5: resolveDecalGameObject({
    x: 672,
y: 96,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 2,
rotation: 0,
layerName: "BackgroundDecals",
texture: Column
}),
Column_6: resolveDecalGameObject({
    x: 864,
y: 96,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 2,
rotation: 0,
layerName: "BackgroundDecals",
texture: Column
}),
Column_7: resolveDecalGameObject({
    x: 568,
y: 96,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 2,
rotation: 0,
layerName: "BackgroundDecals",
texture: Column
}),
Column_8: resolveDecalGameObject({
    x: 376,
y: 96,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 2,
rotation: 0,
layerName: "BackgroundDecals",
texture: Column
}),
Column_9: resolveDecalGameObject({
    x: 104,
y: 96,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 2,
rotation: 0,
layerName: "BackgroundDecals",
texture: Column
}),
GlowingCircle: resolveDecalGameObject({
    x: 560,
y: 32,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: GlowingCircle
}),
GlowingCircle_1: resolveDecalGameObject({
    x: 656,
y: 208,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: GlowingCircle
}),
GlowingCircle_2: resolveDecalGameObject({
    x: 776,
y: 96,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: GlowingCircle
}),
GlowingCircle_3: resolveDecalGameObject({
    x: 952,
y: 232,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: GlowingCircle
}),
GlowingCircle_4: resolveDecalGameObject({
    x: 1024,
y: 8,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: GlowingCircle
}),
GlowingCircle_5: resolveDecalGameObject({
    x: 1136,
y: 136,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: GlowingCircle
}),
GlowingCircle_6: resolveDecalGameObject({
    x: 1264,
y: 208,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: GlowingCircle
}),
GlowingCircle_7: resolveDecalGameObject({
    x: 440,
y: 184,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: GlowingCircle
}),
GlowingCircle_8: resolveDecalGameObject({
    x: 312,
y: 112,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: GlowingCircle
}),
GlowingCircle_9: resolveDecalGameObject({
    x: 200,
y: -16,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: GlowingCircle
}),
GlowingCircle_10: resolveDecalGameObject({
    x: 128,
y: 208,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: GlowingCircle
}),
GlowingCircle_11: resolveDecalGameObject({
    x: 0,
y: 72,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: GlowingCircle
}),
GlowingCircle_12: resolveDecalGameObject({
    x: -216,
y: 8,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: GlowingCircle
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":224,"y":224,"width":1024,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
Player: {"type":"Player","x":32,"y":224,"flippedX":false,"flippedY":false,"uid":"55988047_1","faceRight":true,"name":"","depth":0},
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":648,"y":64,"width":248,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_2","name":"","depth":0}),
// @ts-ignore
SecretWorshipper1: resolveNpc({"type":"NpcIguana","x":672,"y":64,"flippedX":false,"flippedY":false,"uid":"26367058_3","name":"SecretWorshipper1","style":9,"depth":0}),
// @ts-ignore
SecretWorshipper2: resolveNpc({"type":"NpcIguana","x":736,"y":64,"flippedX":false,"flippedY":false,"uid":"26367058_4","name":"SecretWorshipper2","style":10,"depth":0}),
// @ts-ignore
SecretWorshipper3: resolveNpc({"type":"NpcIguana","x":800,"y":64,"flippedX":false,"flippedY":false,"uid":"26367058_5","name":"SecretWorshipper3","style":8,"depth":0}),
// @ts-ignore
Worshipper: resolveNpc({"type":"NpcIguana","x":864,"y":64,"flippedX":false,"flippedY":false,"uid":"26367058_6","name":"Worshipper","style":2,"depth":0}),
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":896,"y":32,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55824435_7","name":"","depth":0}),
// @ts-ignore
SlopeRight_1: resolveSlopeRight({"type":"SlopeRight","x":928,"y":0,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55824435_8","name":"","depth":0}),
// @ts-ignore
SlopeLeft: resolveSlopeLeft({"type":"SlopeLeft","x":896,"y":64,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55845599_10","name":"","depth":0}),
// @ts-ignore
SlopeLeft_1: resolveSlopeLeft({"type":"SlopeLeft","x":928,"y":32,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55845599_11","name":"","depth":0}),
// @ts-ignore
SlopeLeft_2: resolveSlopeLeft({"type":"SlopeLeft","x":960,"y":0,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55845599_12","name":"","depth":0}),
// @ts-ignore
SlopeLeft_3: resolveSlopeLeft({"type":"SlopeLeft","x":584,"y":0,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55845599_13","name":"","depth":0}),
// @ts-ignore
SlopeLeft_4: resolveSlopeLeft({"type":"SlopeLeft","x":616,"y":32,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55845599_14","name":"","depth":0}),
// @ts-ignore
SlopeRight_2: resolveSlopeRight({"type":"SlopeRight","x":616,"y":64,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_15","name":"","depth":0}),
// @ts-ignore
SlopeRight_3: resolveSlopeRight({"type":"SlopeRight","x":584,"y":32,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_16","name":"","depth":0}),
// @ts-ignore
SlopeRight_4: resolveSlopeRight({"type":"SlopeRight","x":552,"y":0,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_17","name":"","depth":0}),
// @ts-ignore
SlopeRight_5: resolveSlopeRight({"type":"SlopeRight","x":1184,"y":128,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_19","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":1216,"y":128,"width":32,"height":96,"flippedX":false,"flippedY":false,"uid":"55823268_20","name":"","depth":0}),
DuckSpawn: {"type":"Anchor","x":1208,"y":128,"flippedX":false,"flippedY":false,"uid":"25979726_22","name":"DuckSpawn","depth":0},
KeySpawn: {"type":"Anchor","x":1104,"y":152,"flippedX":false,"flippedY":false,"uid":"25979726_24","name":"KeySpawn","depth":0},
// @ts-ignore
PortalFluid: resolvePortalFluid({"type":"PortalFluid","x":144,"y":224,"width":80,"height":56,"flippedX":false,"flippedY":false,"uid":"24775263_25","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":0,"y":224,"width":144,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_26","name":"","depth":0})
};
}
};

export const UnrealSnowmanArgs = {
    width: 512,
height: 256,
gameObjectsSupplier: () => {
  return {
    Player: {"type":"Player","x":88,"y":136,"flippedX":false,"flippedY":false,"uid":"55988047_12","faceRight":true,"name":"","depth":0},
// @ts-ignore
Block: resolveBlock({"type":"Block","x":256,"y":224,"width":256,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_26","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":512,"y":0,"width":32,"height":224,"flippedX":false,"flippedY":false,"uid":"55823268_27","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":0,"y":136,"width":256,"height":120,"flippedX":false,"flippedY":false,"uid":"55823268_28","name":"","depth":0}),
// @ts-ignore
PuzzleWall: resolveBlock({"type":"Block","x":224,"y":0,"width":32,"height":72,"flippedX":false,"flippedY":false,"uid":"55823268_30","name":"PuzzleWall","depth":0}),
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":128,"y":72,"width":96,"height":64,"flippedX":false,"flippedY":false,"uid":"55824435_32","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":224,"y":72,"width":32,"height":64,"flippedX":false,"flippedY":false,"uid":"55823268_33","name":"","depth":0}),
TorchA: {"type":"Anchor","x":16,"y":136,"flippedX":false,"flippedY":false,"uid":"25979726_34","name":"TorchA","depth":0},
Torch1: {"type":"Anchor","x":280,"y":224,"flippedX":false,"flippedY":false,"uid":"25979726_35","name":"Torch1","depth":0},
Torch2: {"type":"Anchor","x":488,"y":224,"flippedX":false,"flippedY":false,"uid":"25979726_36","name":"Torch2","depth":0},
SnowmanSpawn: {"type":"Anchor","x":384,"y":224,"flippedX":false,"flippedY":false,"uid":"25979726_38","name":"SnowmanSpawn","depth":0}
};
}
};

export const UnrealT9Args = {
    width: 256,
height: 256,
gameObjectsSupplier: () => {
  return {
    GlowingDiamond: resolveDecalGameObject({
    x: 40,
y: 40,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: GlowingDiamond
}),
GlowingDiamond_1: resolveDecalGameObject({
    x: 224,
y: 104,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: GlowingDiamond
}),
GlowingDiamond_2: resolveDecalGameObject({
    x: 88,
y: 168,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: GlowingDiamond
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":0,"y":208,"width":256,"height":48,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
Player: {"type":"Player","x":16,"y":208,"flippedX":false,"flippedY":false,"uid":"55988047_1","faceRight":true,"name":"","depth":0},
PlaceKeys: {"type":"Anchor","x":48,"y":208,"flippedX":false,"flippedY":false,"uid":"25979726_3","name":"PlaceKeys","depth":0},
Hint: {"type":"Anchor","x":200,"y":208,"flippedX":false,"flippedY":false,"uid":"25979726_4","name":"Hint","depth":0}
};
}
};

export const VolcanoAboveArgs = {
    width: 768,
height: 320,
gameObjectsSupplier: () => {
  return {
    VolcanoDeadBush: resolveDecalGameObject({
    x: 394.5502326229828,
y: 152.85496374385605,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "FrontDecals",
texture: VolcanoDeadBush
}),
VolcanoDeadBush_1: resolveDecalGameObject({
    x: 477.6095179224652,
y: 81.28741339342513,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "FrontDecals",
texture: VolcanoDeadBush
}),
VolcanoDeadBush_2: resolveDecalGameObject({
    x: 720.0186535135153,
y: 169.03717745284493,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "FrontDecals",
texture: VolcanoDeadBush
}),
VolcanoDeadBush_3: resolveDecalGameObject({
    x: 71.20466132548324,
y: 248.84376424286185,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "FrontDecals",
texture: VolcanoDeadBush
}),
SmallDecorativeRock: resolveDecalGameObject({
    x: 320.7622984779005,
y: 251.56355242121094,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_1: resolveDecalGameObject({
    x: 326.1243222681649,
y: 241.26846674390322,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_2: resolveDecalGameObject({
    x: 305.3196699619389,
y: 252.6359571792638,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_3: resolveDecalGameObject({
    x: 288.80463668792447,
y: 252.8504381308744,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_4: resolveDecalGameObject({
    x: 310.4672128005928,
y: 243.84223816323015,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_5: resolveDecalGameObject({
    x: 322.4781460907851,
y: 232.260266776259,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_6: resolveDecalGameObject({
    x: 274.2199319784052,
y: 251.56355242121094,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_7: resolveDecalGameObject({
    x: 297,
y: 244,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_8: resolveDecalGameObject({
    x: 325.9098413165543,
y: 223.25206680861473,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_9: resolveDecalGameObject({
    x: 307.4644794780447,
y: 234.83403819558592,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_10: resolveDecalGameObject({
    x: 283.44261289766007,
y: 242.76983340517728,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_11: resolveDecalGameObject({
    x: 294.1666604781889,
y: 233.76163343753302,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_12: resolveDecalGameObject({
    x: 258.5628225108331,
y: 253.06491908248498,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
GroundSpeckles: resolveDecalGameObject({
    x: 357.9628823456876,
y: 172.9029188417225,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
GroundSpeckles_1: resolveDecalGameObject({
    x: 199.13426518180154,
y: 269.52629230523974,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
GroundSpeckles_2: resolveDecalGameObject({
    x: 75.03954043944121,
y: 270.47358028037223,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
GroundSpeckles_3: resolveDecalGameObject({
    x: 437.21930959844184,
y: 103.75089665704841,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: -1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
SmallDecorativeRock_13: resolveDecalGameObject({
    x: 547.1075191957178,
y: 172.04751222544726,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_14: resolveDecalGameObject({
    x: 563.3013671899864,
y: 172.04751222544726,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_15: resolveDecalGameObject({
    x: 592.4065264229288,
y: 171.6098406580346,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_16: resolveDecalGameObject({
    x: 607.0685239312531,
y: 172.2663480091536,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_17: resolveDecalGameObject({
    x: 549.0770412490748,
y: 161.54339460754326,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_18: resolveDecalGameObject({
    x: 560.7695167040421,
y: 165.63757352607493,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_19: resolveDecalGameObject({
    x: 589.3428254510401,
y: 163.29408087719392,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_20: resolveDecalGameObject({
    x: 546.8886834120115,
y: 151.4769485570519,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_21: resolveDecalGameObject({
    x: 563.4260240551611,
y: 155.00879904299626,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_22: resolveDecalGameObject({
    x: 575.4952151842551,
y: 160.44647061040894,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_23: resolveDecalGameObject({
    x: 547.9828623305431,
y: 140.09748780432258,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_24: resolveDecalGameObject({
    x: 558.5506809203358,
y: 146.03653191103658,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
SmallDecorativeRock_25: resolveDecalGameObject({
    x: 575.4456453673669,
y: 172.62679103915775,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: SmallDecorativeRock
}),
GroundSpeckles_4: resolveDecalGameObject({
    x: 664.2193095984419,
y: 189.75089665704843,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
BallColorful: resolveDecalGameObject({
    x: 664,
y: 168,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: BallColorful
}),
CloudLong: resolveDecalGameObject({
    x: 88,
y: 32,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_1: resolveDecalGameObject({
    x: 120,
y: 40,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_2: resolveDecalGameObject({
    x: 264,
y: 88,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_3: resolveDecalGameObject({
    x: 424,
y: 40,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_4: resolveDecalGameObject({
    x: 392,
y: 48,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_5: resolveDecalGameObject({
    x: 600,
y: 48,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
CloudLong_6: resolveDecalGameObject({
    x: 664,
y: 64,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "Parallax1Decals",
texture: CloudLong
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":0,"y":256,"width":104,"height":64,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":168,"y":256,"width":344,"height":64,"flippedX":false,"flippedY":false,"uid":"55823268_1","name":"","depth":0}),
Player: {"type":"Player","x":136,"y":272,"flippedX":false,"flippedY":false,"uid":"55988047_2","faceRight":true,"name":"","depth":0},
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":0,"y":120,"width":56,"height":136,"flippedX":false,"flippedY":false,"uid":"55823268_3","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":0,"y":64,"width":32,"height":56,"flippedX":false,"flippedY":false,"uid":"55823268_4","name":"","depth":0}),
// @ts-ignore
Block_4: resolveBlock({"type":"Block","x":328,"y":160,"width":80,"height":96,"flippedX":false,"flippedY":false,"uid":"55823268_5","name":"","depth":0}),
// @ts-ignore
Block_5: resolveBlock({"type":"Block","x":408,"y":88,"width":136,"height":168,"flippedX":false,"flippedY":false,"uid":"55823268_6","name":"","depth":0}),
// @ts-ignore
PipeHorizontal: resolvePipeHorizontal({"type":"PipeHorizontal","x":256,"y":160,"width":72,"flippedX":false,"flippedY":false,"uid":"55841307_7","visible":true,"name":"","depth":0}),
Prankster: {"type":"Anchor","x":280,"y":160,"flippedX":false,"flippedY":false,"uid":"25979726_8","name":"Prankster","depth":0},
// @ts-ignore
ToTownGate: resolveGate({"type":"Gate","x":104,"y":304,"width":64,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_9","levelName":"VolcanoTown","checkpointName":"FromAbove","name":"ToTownGate","depth":0}),
// @ts-ignore
PipeHorizontal_1: resolvePipeHorizontal({"type":"PipeHorizontal","x":312,"y":224,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_10","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_2: resolvePipeHorizontal({"type":"PipeHorizontal","x":288,"y":232,"width":40,"flippedX":false,"flippedY":false,"uid":"55841307_11","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_3: resolvePipeHorizontal({"type":"PipeHorizontal","x":272,"y":248,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_12","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeLeftEnd: resolvePipeLeftEnd({"type":"PipeLeftEnd","x":256,"y":160,"flippedX":false,"flippedY":false,"uid":"63428932_13","name":"","depth":0}),
// @ts-ignore
ValuableOrange: resolveValuableOrange({"type":"ValuableOrange","x":44,"y":120,"flippedX":false,"flippedY":false,"uid":"56004563_14","name":"","depth":0}),
// @ts-ignore
ValuableOrange_1: resolveValuableOrange({"type":"ValuableOrange","x":16,"y":64,"flippedX":false,"flippedY":false,"uid":"56004563_15","name":"","depth":0}),
PlayerStopEntry: {"type":"Anchor","x":192,"y":264,"flippedX":false,"flippedY":false,"uid":"25979726_16","name":"PlayerStopEntry","depth":0},
KeepCameraToLeft: {"type":"Anchor","x":512,"y":0,"flippedX":false,"flippedY":false,"uid":"25979726_17","name":"KeepCameraToLeft","depth":0},
// @ts-ignore
Block_6: resolveBlock({"type":"Block","x":512,"y":176,"width":256,"height":144,"flippedX":false,"flippedY":false,"uid":"55823268_18","name":"","depth":0}),
// @ts-ignore
Block_7: resolveBlock({"type":"Block","x":736,"y":0,"width":32,"height":176,"flippedX":false,"flippedY":false,"uid":"55823268_19","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_4: resolvePipeHorizontal({"type":"PipeHorizontal","x":526,"y":137,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_20","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_5: resolvePipeHorizontal({"type":"PipeHorizontal","x":536,"y":152,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_21","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_6: resolvePipeHorizontal({"type":"PipeHorizontal","x":568,"y":160,"width":28,"flippedX":false,"flippedY":false,"uid":"55841307_22","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_7: resolvePipeHorizontal({"type":"PipeHorizontal","x":596,"y":168,"width":18,"flippedX":false,"flippedY":false,"uid":"55841307_23","visible":false,"name":"","depth":0}),
Book: {"type":"Anchor","x":664,"y":160,"flippedX":false,"flippedY":false,"uid":"25979726_24","name":"Book","depth":0}
};
}
};

export const VolcanoBossArenaArgs = {
    width: 816,
height: 256,
gameObjectsSupplier: () => {
  return {
    GroundSpeckles: resolveDecalGameObject({
    x: 685.5930595662703,
y: 220.51552327733887,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
GroundSpeckles_1: resolveDecalGameObject({
    x: 685.114275467532,
y: 147.2615561703749,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: -1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
GroundSpeckles_2: resolveDecalGameObject({
    x: 64,
y: 40,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
VolcanoMineralDebris: resolveDecalGameObject({
    x: 78.66864533342431,
y: 203.89731196455642,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoMineralDebris
}),
VolcanoMineralDebris_1: resolveDecalGameObject({
    x: 20.17641350412977,
y: 198.1480755027027,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoMineralDebris
}),
VolcanoMineralDebris_2: resolveDecalGameObject({
    x: 40.92365812734107,
y: 189.39923740857745,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoMineralDebris
}),
VolcanoChain: resolveDecalGameObject({
    x: 168,
y: 24,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoChain
}),
VolcanoChain_1: resolveDecalGameObject({
    x: 168,
y: 72,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoChain
}),
VolcanoChain_2: resolveDecalGameObject({
    x: 168,
y: 120,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoChain
}),
Key: resolveDecalGameObject({
    x: 167.21693226349737,
y: 151.95385182388233,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0.728575132948694,
layerName: "BackgroundDecals",
texture: KeyGreen
}),
VolcanoCrystal: resolveDecalGameObject({
    x: 55.42173268332006,
y: 129.65717156583645,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystal
}),
VolcanoCrystal_1: resolveDecalGameObject({
    x: 328,
y: 200,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "Parallax1Decals",
texture: VolcanoCrystal
}),
VolcanoCrystal_2: resolveDecalGameObject({
    x: 396.34110086626936,
y: 196.40688958366852,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "Parallax1Decals",
texture: VolcanoCrystal
}),
VolcanoCrystal_3: resolveDecalGameObject({
    x: 486.9575238187166,
y: 201.97376880941613,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: -1,
rotation: 0,
layerName: "Parallax1Decals",
texture: VolcanoCrystal
}),
VolcanoCrystal_4: resolveDecalGameObject({
    x: 559.9454958896297,
y: 197.33470278795977,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "Parallax1Decals",
texture: VolcanoCrystal
}),
VolcanoCrystal_5: resolveDecalGameObject({
    x: 583.7593681331055,
y: 192.69563676650344,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: -1,
rotation: 0,
layerName: "Parallax1Decals",
texture: VolcanoCrystal
}),
VolcanoCrystal_6: resolveDecalGameObject({
    x: 242.7593681331055,
y: 196.69563676650344,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: -1,
rotation: 0,
layerName: "Parallax1Decals",
texture: VolcanoCrystal
}),
VolcanoCrystal_7: resolveDecalGameObject({
    x: 218.94549588962963,
y: 201.33470278795977,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "Parallax1Decals",
texture: VolcanoCrystal
}),
VolcanoCrystal_8: resolveDecalGameObject({
    x: 145.9575238187166,
y: 205.97376880941613,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: -1,
rotation: 0,
layerName: "Parallax1Decals",
texture: VolcanoCrystal
}),
VolcanoCrystal_9: resolveDecalGameObject({
    x: 55.34110086626936,
y: 200.40688958366852,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "Parallax1Decals",
texture: VolcanoCrystal
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":656,"y":208,"width":160,"height":48,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":656,"y":0,"width":160,"height":160,"flippedX":false,"flippedY":false,"uid":"55823268_1","name":"","depth":0}),
Player: {"type":"Player","x":728,"y":208,"flippedX":false,"flippedY":false,"uid":"55988047_2","faceRight":false,"name":"","depth":0},
// @ts-ignore
Gate: resolveGate({"type":"Gate","x":784,"y":176,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_3","levelName":"VolcanoTown","checkpointName":"FromBossArena","name":"","depth":0}),
// @ts-ignore
Lava: resolveLava({"type":"Lava","x":-192,"y":208,"width":848,"height":48,"flippedX":false,"flippedY":false,"uid":"98209396_4","name":"","depth":0}),
Boss: {"type":"Anchor","x":404,"y":188,"flippedX":false,"flippedY":false,"uid":"25979726_6","name":"Boss","depth":0},
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":0,"y":144,"width":96,"height":112,"flippedX":false,"flippedY":false,"uid":"55823268_15","name":"","depth":0}),
// @ts-ignore
BossExit: resolveBlock({"type":"Block","x":80,"y":56,"width":16,"height":88,"flippedX":false,"flippedY":false,"uid":"55823268_16","name":"BossExit","depth":0}),
// @ts-ignore
ValuableSpawnX: resolveRegion({"type":"Region","x":128,"y":0,"width":496,"height":8,"flippedX":false,"flippedY":false,"uid":"25971607_17","name":"ValuableSpawnX","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":-96,"y":0,"width":192,"height":56,"flippedX":false,"flippedY":false,"uid":"55823268_18","name":"","depth":0}),
// @ts-ignore
Block_4: resolveBlock({"type":"Block","x":656,"y":152,"width":16,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_19","name":"","depth":0}),
// @ts-ignore
Block_5: resolveBlock({"type":"Block","x":656,"y":200,"width":16,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_20","name":"","depth":0}),
Debug: {"type":"Checkpoint","x":480,"y":208,"flippedX":false,"flippedY":false,"uid":"55940370_21","name":"Debug","faceRight":false,"depth":0},
DefeatedBoss: {"type":"Checkpoint","x":72,"y":144,"flippedX":false,"flippedY":false,"uid":"55940370_22","name":"DefeatedBoss","faceRight":true,"depth":0}
};
}
};

export const VolcanoCavernArgs = {
    width: 1072,
height: 256,
gameObjectsSupplier: () => {
  return {
    VolcanoPillarBroken: resolveDecalGameObject({
    x: 888,
y: 80,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "FrontDecals",
texture: VolcanoPillarBroken
}),
VolcanoPillarBroken_1: resolveDecalGameObject({
    x: 512,
y: 48,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoPillarBroken
}),
VolcanoMineralDebris: resolveDecalGameObject({
    x: 760,
y: 136,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoMineralDebris
}),
VolcanoMineralDebris_1: resolveDecalGameObject({
    x: 728,
y: 120,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoMineralDebris
}),
VolcanoMineralDebris_2: resolveDecalGameObject({
    x: 555,
y: 140,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoMineralDebris
}),
VolcanoMineralDebris_3: resolveDecalGameObject({
    x: 584,
y: 128,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoMineralDebris
}),
VolcanoMineralDebris_4: resolveDecalGameObject({
    x: 348.82731131783095,
y: 135.4517572901208,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoMineralDebris
}),
VolcanoMineralDebris_5: resolveDecalGameObject({
    x: 376.47891663012325,
y: 146.09497968065233,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoMineralDebris
}),
VolcanoMineralDebris_6: resolveDecalGameObject({
    x: 920.5496835651861,
y: 65.33658833056273,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoMineralDebris
}),
VolcanoMineralDebris_7: resolveDecalGameObject({
    x: 947.032168564193,
y: 75.31549572149288,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoMineralDebris
}),
VolcanoMineralDebris_8: resolveDecalGameObject({
    x: 988.4830146495951,
y: 228.0695396288081,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoMineralDebris
}),
VolcanoMineralDebris_9: resolveDecalGameObject({
    x: 1011.895066605239,
y: 244.95692136730526,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: -1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoMineralDebris
}),
VolcanoMineralDebris_10: resolveDecalGameObject({
    x: 84.01451444733078,
y: 229.4896431388359,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoMineralDebris
}),
VolcanoMineralDebris_11: resolveDecalGameObject({
    x: 125.26743624833088,
y: 136.92211129268935,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoMineralDebris
}),
VolcanoMineralDebris_12: resolveDecalGameObject({
    x: 95.41776112403,
y: 138.9344489415186,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoMineralDebris
}),
VolcanoChain: resolveDecalGameObject({
    x: 232,
y: 89,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoChain
}),
VolcanoChain_1: resolveDecalGameObject({
    x: 232,
y: 40,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoChain
}),
GroundSpeckles: resolveDecalGameObject({
    x: 427.4136394542653,
y: 125.09904506465152,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
GroundSpeckles_1: resolveDecalGameObject({
    x: 1019.9936753074551,
y: 121.62915545978575,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
GroundSpeckles_2: resolveDecalGameObject({
    x: 38.014917130438434,
y: 220.3282375537458,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
GroundSpeckles_3: resolveDecalGameObject({
    x: 676.6432216897812,
y: 236.82566151983525,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
CrackSmall: resolveDecalGameObject({
    x: 267.21798779133997,
y: 233,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: CrackSmall
}),
CrackSmall_1: resolveDecalGameObject({
    x: 944,
y: 233,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: CrackSmall
}),
VolcanoPillarBroken_2: resolveDecalGameObject({
    x: 968,
y: 136,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoPillarBroken
}),
KeyGreen: resolveDecalGameObject({
    x: 882,
y: 78,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: KeyGreen
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":456,"y":224,"width":616,"height":48,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
Player: {"type":"Player","x":992,"y":208,"flippedX":false,"flippedY":false,"uid":"55988047_1","faceRight":false,"name":"","depth":0},
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":592,"y":208,"width":56,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_2","name":"","depth":0}),
// @ts-ignore
ClownWonderful: resolveClownWonderful({"type":"ClownWonderful","x":624,"y":208,"flippedX":false,"flippedY":false,"uid":"36552372_3","name":"","depth":0}),
// @ts-ignore
ClownWonderful_1: resolveClownWonderful({"type":"ClownWonderful","x":792,"y":88,"flippedX":false,"flippedY":false,"uid":"36552372_4","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":784,"y":88,"width":16,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_5","name":"","depth":0}),
// @ts-ignore
FromBoss: resolveGate({"type":"Gate","x":1040,"y":176,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_6","levelName":"JungleBossArena","checkpointName":"FromVolcano","name":"FromBoss","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":1008,"y":0,"width":64,"height":136,"flippedX":false,"flippedY":false,"uid":"55823268_7","name":"","depth":0}),
// @ts-ignore
Block_4: resolveBlock({"type":"Block","x":904,"y":0,"width":104,"height":80,"flippedX":false,"flippedY":false,"uid":"55823268_8","name":"","depth":0}),
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":904,"y":80,"width":104,"height":56,"flippedX":false,"flippedY":true,"uid":"55824435_10","name":"","depth":0}),
// @ts-ignore
Block_5: resolveBlock({"type":"Block","x":456,"y":0,"width":448,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_11","name":"","depth":0}),
// @ts-ignore
SlopeRight_1: resolveSlopeRight({"type":"SlopeRight","x":856,"y":16,"width":48,"height":64,"flippedX":false,"flippedY":true,"uid":"55824435_13","name":"","depth":0}),
// @ts-ignore
SlopeRight_2: resolveSlopeRight({"type":"SlopeRight","x":832,"y":16,"width":48,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_14","name":"","depth":0}),
// @ts-ignore
SlopeRight_3: resolveSlopeRight({"type":"SlopeRight","x":808,"y":16,"width":48,"height":16,"flippedX":false,"flippedY":true,"uid":"55824435_15","name":"","depth":0}),
// @ts-ignore
Block_6: resolveBlock({"type":"Block","x":968,"y":208,"width":104,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_16","name":"","depth":0}),
// @ts-ignore
Block_7: resolveBlock({"type":"Block","x":176,"y":0,"width":280,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_18","name":"","depth":0}),
// @ts-ignore
Block_8: resolveBlock({"type":"Block","x":328,"y":112,"width":128,"height":144,"flippedX":false,"flippedY":false,"uid":"55823268_19","name":"","depth":0}),
// @ts-ignore
PipeHorizontal: resolvePipeHorizontal({"type":"PipeHorizontal","x":456,"y":152,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_20","visible":true,"name":"","depth":0}),
// @ts-ignore
PipeRightEnd: resolvePipeRightEnd({"type":"PipeRightEnd","x":488,"y":152,"flippedX":false,"flippedY":false,"uid":"63418353_21","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_1: resolvePipeHorizontal({"type":"PipeHorizontal","x":296,"y":152,"width":32,"flippedX":false,"flippedY":false,"uid":"55841307_22","visible":true,"name":"","depth":0}),
// @ts-ignore
PipeLeftEnd: resolvePipeLeftEnd({"type":"PipeLeftEnd","x":296,"y":152,"flippedX":false,"flippedY":false,"uid":"63428932_23","name":"","depth":0}),
// @ts-ignore
Block_9: resolveBlock({"type":"Block","x":176,"y":224,"width":176,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_24","name":"","depth":0}),
// @ts-ignore
ClownSneezy: resolveClownSneezy({"type":"ClownSneezy","x":336,"y":80,"flippedX":false,"flippedY":false,"uid":"11949926_27","name":"","depth":0}),
// @ts-ignore
Block_10: resolveBlock({"type":"Block","x":224,"y":112,"width":16,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_28","name":"","depth":0}),
// @ts-ignore
ClownWonderful_2: resolveClownWonderful({"type":"ClownWonderful","x":232,"y":112,"flippedX":false,"flippedY":false,"uid":"36552372_29","name":"","depth":0}),
// @ts-ignore
Block_11: resolveBlock({"type":"Block","x":536,"y":40,"width":248,"height":120,"flippedX":false,"flippedY":false,"uid":"55823268_30","name":"","depth":0}),
// @ts-ignore
ClownSneezy_1: resolveClownSneezy({"type":"ClownSneezy","x":480,"y":200,"flippedX":false,"flippedY":false,"uid":"11949926_31","name":"","depth":0}),
// @ts-ignore
Block_12: resolveBlock({"type":"Block","x":536,"y":8,"width":248,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_32","name":"","depth":0}),
// @ts-ignore
FakeWall: resolveFakeWall({"type":"FakeWall","x":536,"y":24,"width":248,"height":16,"flippedX":false,"flippedY":false,"uid":"02672398_33","name":"","depth":0}),
// @ts-ignore
Block_13: resolveBlock({"type":"Block","x":0,"y":208,"width":104,"height":48,"flippedX":false,"flippedY":false,"uid":"55823268_34","name":"","depth":0}),
// @ts-ignore
Block_14: resolveBlock({"type":"Block","x":72,"y":224,"width":104,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_35","name":"","depth":0}),
// @ts-ignore
Block_15: resolveBlock({"type":"Block","x":0,"y":0,"width":144,"height":160,"flippedX":false,"flippedY":false,"uid":"55823268_37","name":"","depth":0}),
// @ts-ignore
Block_16: resolveBlock({"type":"Block","x":144,"y":0,"width":32,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_38","name":"","depth":0}),
// @ts-ignore
SlopeLeft: resolveSlopeLeft({"type":"SlopeLeft","x":144,"y":16,"width":64,"height":16,"flippedX":false,"flippedY":true,"uid":"55845599_40","name":"","depth":0}),
// @ts-ignore
SlopeLeft_1: resolveSlopeLeft({"type":"SlopeLeft","x":144,"y":16,"width":24,"height":40,"flippedX":false,"flippedY":true,"uid":"55845599_41","name":"","depth":0}),
// @ts-ignore
ValuableBlue: resolveValuableBlue({"type":"ValuableBlue","x":304,"y":224,"flippedX":false,"flippedY":false,"uid":"55991906_42","name":"","depth":0}),
// @ts-ignore
Gate: resolveGate({"type":"Gate","x":0,"y":176,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_43","levelName":"VolcanoTown","checkpointName":"FromCavern","name":"","depth":0}),
FromTown: {"type":"Checkpoint","x":72,"y":208,"flippedX":false,"flippedY":false,"uid":"55940370_44","name":"FromTown","faceRight":true,"depth":0}
};
}
};

export const VolcanoOracleArgs = {
    width: 256,
height: 256,
gameObjectsSupplier: () => {
  return {
    VolcanoOracleHouseReflection: resolveDecalGameObject({
    x: 127,
y: 128,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoOracleHouseReflection
}),
CrackSmall: resolveDecalGameObject({
    x: 104,
y: 201,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: CrackSmall
}),
VolcanoCrystalTile: resolveDecalGameObject({
    x: 48,
y: 80,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
VolcanoCrystalTile_1: resolveDecalGameObject({
    x: 80,
y: 80,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
VolcanoCrystalTile_2: resolveDecalGameObject({
    x: 48,
y: 112,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
VolcanoCrystalTile_3: resolveDecalGameObject({
    x: 80,
y: 112,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
VolcanoCrystalTile_4: resolveDecalGameObject({
    x: 112,
y: 80,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
VolcanoCrystalTile_5: resolveDecalGameObject({
    x: 112,
y: 112,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
VolcanoCrystalTile_6: resolveDecalGameObject({
    x: 144,
y: 80,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
VolcanoCrystalTile_7: resolveDecalGameObject({
    x: 144,
y: 112,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
VolcanoCrystalTile_8: resolveDecalGameObject({
    x: 176,
y: 80,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
VolcanoCrystalTile_9: resolveDecalGameObject({
    x: 176,
y: 112,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
VolcanoCrystalTile_10: resolveDecalGameObject({
    x: 208,
y: 80,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
VolcanoCrystalTile_11: resolveDecalGameObject({
    x: 208,
y: 112,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
VolcanoCrystalTile_12: resolveDecalGameObject({
    x: 48,
y: 144,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
VolcanoCrystalTile_13: resolveDecalGameObject({
    x: 80,
y: 144,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
VolcanoCrystalTile_14: resolveDecalGameObject({
    x: 112,
y: 144,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
VolcanoCrystalTile_15: resolveDecalGameObject({
    x: 144,
y: 144,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
VolcanoCrystalTile_16: resolveDecalGameObject({
    x: 176,
y: 144,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
VolcanoCrystalTile_17: resolveDecalGameObject({
    x: 208,
y: 144,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
VolcanoCrystalTile_18: resolveDecalGameObject({
    x: 48,
y: 176,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
VolcanoCrystalTile_19: resolveDecalGameObject({
    x: 80,
y: 176,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
VolcanoCrystalTile_20: resolveDecalGameObject({
    x: 112,
y: 176,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
VolcanoCrystalTile_21: resolveDecalGameObject({
    x: 144,
y: 176,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
VolcanoCrystalTile_22: resolveDecalGameObject({
    x: 176,
y: 176,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
VolcanoCrystalTile_23: resolveDecalGameObject({
    x: 208,
y: 176,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalTile
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":0,"y":192,"width":256,"height":64,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":0,"y":0,"width":256,"height":64,"flippedX":false,"flippedY":false,"uid":"55823268_1","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":0,"y":48,"width":32,"height":160,"flippedX":false,"flippedY":false,"uid":"55823268_2","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":224,"y":48,"width":32,"height":160,"flippedX":false,"flippedY":false,"uid":"55823268_3","name":"","depth":0}),
// @ts-ignore
Door: resolveDoor({"type":"Door","x":184,"y":160,"flippedX":false,"flippedY":false,"uid":"55913988_4","levelName":"VolcanoTown","checkpointName":"FromOracle","name":"","depth":0}),
Player: {"type":"Player","x":160,"y":192,"flippedX":false,"flippedY":false,"uid":"55988047_5","faceRight":false,"name":"","depth":0},
// @ts-ignore
Oracle: resolveNpc({"type":"NpcIguana","x":56,"y":192,"flippedX":false,"flippedY":false,"uid":"26367058_6","name":"Oracle","style":10,"depth":0})
};
}
};

export const VolcanoShopInnArgs = {
    width: 256,
height: 256,
gameObjectsSupplier: () => {
  return {
    VolcanoFloralWallpaper: resolveDecalGameObject({
    x: 0,
y: 0,
originX: 0,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoFloralWallpaper
}),
VolcanoBrickWall: resolveDecalGameObject({
    x: 128,
y: 184,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoBrickWall
}),
JungleShelfLarge: resolveDecalGameObject({
    x: 128.2025035305514,
y: 221.00495049114,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JungleShelfLarge
}),
JungleShelfSmall: resolveDecalGameObject({
    x: 206.30797352869226,
y: 204.78928197941525,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JungleShelfSmall
}),
Bottle2: resolveDecalGameObject({
    x: 193.06517757745036,
y: 193.84370573400108,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Bottle2
}),
Bottle1: resolveDecalGameObject({
    x: 201.98379525889897,
y: 188.70874403862157,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: Bottle1
}),
JungleShelfSmall_1: resolveDecalGameObject({
    x: 72,
y: 80,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JungleShelfSmall
}),
JungleShelfSmall_2: resolveDecalGameObject({
    x: 176,
y: 56,
originX: 0.5,
originY: 0,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: JungleShelfSmall
}),
BookCollection: resolveDecalGameObject({
    x: 87.03222828189746,
y: 75.03946086085345,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: BookCollection
}),
BookCollection_1: resolveDecalGameObject({
    x: 160.86054538866964,
y: 51.11824180292804,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: BookCollection
}),
RoseVase: resolveDecalGameObject({
    x: 58.97425705606014,
y: 72.88115538194289,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: RoseVase
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":0,"y":0,"width":256,"height":24,"flippedX":false,"flippedY":false,"uid":"55823268_3","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":0,"y":24,"width":24,"height":208,"flippedX":false,"flippedY":false,"uid":"55823268_4","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":0,"y":232,"width":256,"height":24,"flippedX":false,"flippedY":false,"uid":"55823268_5","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":232,"y":24,"width":24,"height":208,"flippedX":false,"flippedY":false,"uid":"55823268_6","name":"","depth":0}),
// @ts-ignore
Door: resolveDoor({"type":"Door","x":40,"y":200,"flippedX":false,"flippedY":false,"uid":"55913988_7","levelName":"VolcanoTown","checkpointName":"FromShop","name":"","depth":0}),
// @ts-ignore
Door_1: resolveDoor({"type":"Door","x":56,"y":96,"flippedX":false,"flippedY":false,"uid":"55913988_9","levelName":"VolcanoTown","checkpointName":"FromInn","name":"","depth":0}),
// @ts-ignore
Innkeeper: resolveNpc({"type":"NpcIguana","x":152,"y":126,"flippedX":true,"flippedY":false,"uid":"26367058_10","name":"Innkeeper","style":16,"depth":0}),
// @ts-ignore
Shopkeeper: resolveNpc({"type":"NpcIguana","x":184,"y":232,"flippedX":true,"flippedY":false,"uid":"26367058_11","name":"Shopkeeper","style":17,"depth":0}),
Player: {"type":"Player","x":88,"y":232,"flippedX":false,"flippedY":false,"uid":"55988047_12","faceRight":true,"name":"","depth":0},
// @ts-ignore
SlopeLeft: resolveSlopeLeft({"type":"SlopeLeft","x":16,"y":216,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55845599_14","name":"","depth":0}),
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":208,"y":216,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55824435_15","name":"","depth":0}),
// @ts-ignore
SlopeRight_1: resolveSlopeRight({"type":"SlopeRight","x":208,"y":8,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_16","name":"","depth":0}),
// @ts-ignore
SlopeLeft_1: resolveSlopeLeft({"type":"SlopeLeft","x":8,"y":16,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55845599_17","name":"","depth":0}),
// @ts-ignore
Window1: resolveRegion({"type":"Region","x":96,"y":176,"width":64,"height":32,"flippedX":false,"flippedY":false,"uid":"25971607_18","name":"Window1","depth":0}),
// @ts-ignore
PipeHorizontal: resolvePipeHorizontal({"type":"PipeHorizontal","x":96,"y":216,"width":64,"flippedX":false,"flippedY":false,"uid":"55841307_19","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_1: resolvePipeHorizontal({"type":"PipeHorizontal","x":184,"y":200,"width":44,"flippedX":false,"flippedY":false,"uid":"55841307_21","visible":false,"name":"","depth":0}),
FromInnSave: {"type":"Checkpoint","x":208,"y":128,"flippedX":false,"flippedY":false,"uid":"55940370_23","name":"FromInnSave","faceRight":false,"depth":0},
// @ts-ignore
PipeHorizontal_2: resolvePipeHorizontal({"type":"PipeHorizontal","x":48,"y":80,"width":48,"flippedX":false,"flippedY":false,"uid":"55841307_24","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_3: resolvePipeHorizontal({"type":"PipeHorizontal","x":152,"y":56,"width":48,"flippedX":false,"flippedY":false,"uid":"55841307_25","visible":false,"name":"","depth":0}),
// @ts-ignore
Block_4: resolveBlock({"type":"Block","x":56,"y":128,"width":176,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_26","name":"","depth":0}),
// @ts-ignore
Block_5: resolveBlock({"type":"Block","x":24,"y":160,"width":16,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_27","name":"","depth":0}),
FromUpper: {"type":"Checkpoint","x":100,"y":128,"flippedX":false,"flippedY":false,"uid":"55940370_28","name":"FromUpper","faceRight":true,"depth":0}
};
}
};

export const VolcanoTempleArgs = {
    width: 512,
height: 256,
gameObjectsSupplier: () => {
  return {
    VolcanoChain: resolveDecalGameObject({
    x: 119,
y: 137,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoChain
}),
VolcanoChain_1: resolveDecalGameObject({
    x: 119,
y: 128,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoChain
}),
VolcanoChain_2: resolveDecalGameObject({
    x: 154,
y: 137,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoChain
}),
VolcanoChain_3: resolveDecalGameObject({
    x: 154,
y: 98,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoChain
}),
VolcanoChain_4: resolveDecalGameObject({
    x: 154,
y: 95,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoChain
}),
CrackSmall: resolveDecalGameObject({
    x: 304,
y: 233,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: CrackSmall
}),
GlowingCircle: resolveDecalGameObject({
    x: 256,
y: 0,
originX: 0.5,
originY: 0.5,
scaleX: 40,
scaleY: 2,
rotation: 0,
layerName: "BackgroundDecals",
texture: GlowingCircle
}),
Key1: resolveDecalGameObject({
    x: 176,
y: 176,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: KeyRed
}),
Key2: resolveDecalGameObject({
    x: 256,
y: 176,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: KeyRed
}),
Key3: resolveDecalGameObject({
    x: 336,
y: 176,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: KeyRed
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":0,"y":224,"width":512,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
// @ts-ignore
Door: resolveDoor({"type":"Door","x":32,"y":192,"flippedX":false,"flippedY":false,"uid":"55913988_1","levelName":"VolcanoTown","checkpointName":"FromTemple","name":"","depth":0}),
// @ts-ignore
Door1: resolveDoor({"type":"Door","x":160,"y":192,"flippedX":false,"flippedY":false,"uid":"55913988_2","levelName":"UnrealDuckStump","checkpointName":"","name":"Door1","depth":0}),
// @ts-ignore
Door2: resolveDoor({"type":"Door","x":240,"y":192,"flippedX":false,"flippedY":false,"uid":"55913988_3","levelName":"UnrealT9","checkpointName":"","name":"Door2","depth":0}),
// @ts-ignore
Door3: resolveDoor({"type":"Door","x":320,"y":192,"flippedX":false,"flippedY":false,"uid":"55913988_4","levelName":"UnrealDrawing","checkpointName":"","name":"Door3","depth":0}),
Player: {"type":"Player","x":80,"y":224,"flippedX":false,"flippedY":false,"uid":"55988047_11","faceRight":true,"name":"","depth":0},
// @ts-ignore
Sign: resolveSign({"type":"Sign","x":136,"y":160,"flippedX":false,"flippedY":false,"uid":"86706091_12","title":"Big Key","message":"","name":"","depth":0}),
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":288,"y":0,"width":224,"height":224,"flippedX":false,"flippedY":true,"uid":"55824435_14","name":"","depth":0}),
// @ts-ignore
SlopeLeft: resolveSlopeLeft({"type":"SlopeLeft","x":0,"y":0,"width":224,"height":224,"flippedX":false,"flippedY":true,"uid":"55845599_15","name":"","depth":0}),
BigKey: {"type":"Anchor","x":229,"y":120,"flippedX":false,"flippedY":false,"uid":"25979726_16","name":"BigKey","depth":0},
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":116,"y":160,"width":40,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_17","name":"","depth":0}),
// @ts-ignore
ValuableBlue: resolveValuableBlue({"type":"ValuableBlue","x":480,"y":220,"flippedX":false,"flippedY":false,"uid":"55991906_18","name":"","depth":0}),
// @ts-ignore
ValuableOrange: resolveValuableOrange({"type":"ValuableOrange","x":458,"y":220,"flippedX":false,"flippedY":false,"uid":"56004563_19","name":"","depth":0})
};
}
};

export const VolcanoTownArgs = {
    width: 856,
height: 320,
gameObjectsSupplier: () => {
  return {
    VolcanoMineralDebris: resolveDecalGameObject({
    x: 204,
y: 303,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 1.5707963267948966,
layerName: "FrontDecals",
texture: VolcanoMineralDebris
}),
VolcanoMineralDebris_1: resolveDecalGameObject({
    x: 164.59289835728964,
y: 303.0737757830632,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 1.5707963267948966,
layerName: "FrontDecals",
texture: VolcanoMineralDebris
}),
VolcanoMineralDebris_2: resolveDecalGameObject({
    x: 303.7924084823596,
y: 136.4314040811575,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoMineralDebris
}),
VolcanoMineralDebris_3: resolveDecalGameObject({
    x: 335.5249247179295,
y: 127.85504834181428,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoMineralDebris
}),
VolcanoMineralDebris_4: resolveDecalGameObject({
    x: 272.4887100337569,
y: 129.7847283831665,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoMineralDebris
}),
VolcanoChain: resolveDecalGameObject({
    x: 496,
y: 120,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoChain
}),
GroundSpeckles: resolveDecalGameObject({
    x: 771.966961178674,
y: 284.97556625338854,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
GroundSpeckles_1: resolveDecalGameObject({
    x: 204.93007172605934,
y: 121.86193027911287,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: -1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
GroundSpeckles_2: resolveDecalGameObject({
    x: 87.05279743713716,
y: 286.03725545153935,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
GroundSpeckles_3: resolveDecalGameObject({
    x: 491.3685928337703,
y: 300.5245799185397,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
GroundSpeckles_4: resolveDecalGameObject({
    x: 548.0598924848547,
y: 145.82459273507197,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: -1,
rotation: 0,
layerName: "TerrainDecals",
texture: GroundSpeckles
}),
VolcanoCrystalStoop: resolveDecalGameObject({
    x: 635,
y: 284,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: VolcanoCrystalStoop
}),
CrackSmall: resolveDecalGameObject({
    x: 328,
y: 276,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "TerrainDecals",
texture: CrackSmall
}),
Chimney: resolveDecalGameObject({
    x: 232,
y: 184,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoPillarBroken
}),
VolcanoInnShopBuilding: resolveDecalGameObject({
    x: 208,
y: 288,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoInnShopBuilding
}),
VolcanoTempleExterior: resolveDecalGameObject({
    x: 432,
y: 288,
originX: 0.5,
originY: 1,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoTempleExterior
}),
VolcanoCrystal: resolveDecalGameObject({
    x: 303.8718512710436,
y: 172.20932237684607,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystal
}),
VolcanoCrystal_1: resolveDecalGameObject({
    x: 325.72834537844824,
y: 164.3093847476637,
originX: 0.5,
originY: 0.5,
scaleX: -1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystal
}),
VolcanoCrystal_2: resolveDecalGameObject({
    x: 537.7100050948424,
y: 279.3851428794205,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystal
}),
GlowingEdge: resolveDecalGameObject({
    x: 368,
y: 88,
originX: 0,
originY: 0,
scaleX: 3,
scaleY: 4,
rotation: -1.5707963267948966,
layerName: "BackgroundDecals",
texture: GlowingEdge
}),
VolcanoCrystalBuilding: resolveDecalGameObject({
    x: 612,
y: 239,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: 1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystalBuilding
}),
VolcanoCrystal_3: resolveDecalGameObject({
    x: 629,
y: 208,
originX: 0.5,
originY: 0.5,
scaleX: 1,
scaleY: -1,
rotation: 0,
layerName: "BackgroundDecals",
texture: VolcanoCrystal
}),
// @ts-ignore
Block: resolveBlock({"type":"Block","x":88,"y":288,"width":768,"height":48,"flippedX":false,"flippedY":false,"uid":"55823268_0","name":"","depth":0}),
Player: {"type":"Player","x":776,"y":272,"flippedX":false,"flippedY":false,"uid":"55988047_1","faceRight":false,"name":"","depth":0},
// @ts-ignore
Gate: resolveGate({"type":"Gate","x":824,"y":240,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_2","levelName":"VolcanoCavern","checkpointName":"FromTown","name":"","depth":0}),
// @ts-ignore
Block_1: resolveBlock({"type":"Block","x":736,"y":272,"width":120,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_3","name":"","depth":0}),
// @ts-ignore
Block_2: resolveBlock({"type":"Block","x":0,"y":272,"width":120,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_4","name":"","depth":0}),
// @ts-ignore
SlopeLeft: resolveSlopeLeft({"type":"SlopeLeft","x":368,"y":0,"width":32,"height":128,"flippedX":false,"flippedY":true,"uid":"55845599_5","name":"","depth":0}),
// @ts-ignore
SlopeRight: resolveSlopeRight({"type":"SlopeRight","x":464,"y":0,"width":32,"height":128,"flippedX":false,"flippedY":true,"uid":"55824435_6","name":"","depth":0}),
// @ts-ignore
SlopeRight_1: resolveSlopeRight({"type":"SlopeRight","x":496,"y":128,"width":32,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_7","name":"","depth":0}),
// @ts-ignore
SlopeRight_2: resolveSlopeRight({"type":"SlopeRight","x":528,"y":160,"width":176,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_8","name":"","depth":0}),
// @ts-ignore
Block_3: resolveBlock({"type":"Block","x":704,"y":0,"width":152,"height":192,"flippedX":false,"flippedY":false,"uid":"55823268_9","name":"","depth":0}),
// @ts-ignore
Block_4: resolveBlock({"type":"Block","x":496,"y":0,"width":208,"height":128,"flippedX":false,"flippedY":false,"uid":"55823268_10","name":"","depth":0}),
// @ts-ignore
Block_5: resolveBlock({"type":"Block","x":528,"y":128,"width":176,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_11","name":"","depth":0}),
// @ts-ignore
Block_6: resolveBlock({"type":"Block","x":784,"y":192,"width":72,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_12","name":"","depth":0}),
// @ts-ignore
SlopeRight_3: resolveSlopeRight({"type":"SlopeRight","x":704,"y":192,"width":80,"height":32,"flippedX":false,"flippedY":true,"uid":"55824435_13","name":"","depth":0}),
// @ts-ignore
Sign: resolveSign({"type":"Sign","x":696,"y":288,"flippedX":false,"flippedY":false,"uid":"86706091_14","title":"Town","message":"This is the volcano town.","name":"","depth":0}),
// @ts-ignore
SlopeLeft_1: resolveSlopeLeft({"type":"SlopeLeft","x":336,"y":128,"width":32,"height":24,"flippedX":false,"flippedY":true,"uid":"55845599_15","name":"","depth":0}),
// @ts-ignore
Block_7: resolveBlock({"type":"Block","x":88,"y":152,"width":32,"height":72,"flippedX":false,"flippedY":false,"uid":"55823268_19","name":"","depth":0}),
// @ts-ignore
SlopeLeft_2: resolveSlopeLeft({"type":"SlopeLeft","x":296,"y":152,"width":40,"height":8,"flippedX":false,"flippedY":true,"uid":"55845599_20","name":"","depth":0}),
// @ts-ignore
SlopeRight_4: resolveSlopeRight({"type":"SlopeRight","x":264,"y":144,"width":32,"height":16,"flippedX":false,"flippedY":true,"uid":"55824435_21","name":"","depth":0}),
// @ts-ignore
SlopeRight_5: resolveSlopeRight({"type":"SlopeRight","x":232,"y":136,"width":32,"height":8,"flippedX":false,"flippedY":true,"uid":"55824435_22","name":"","depth":0}),
// @ts-ignore
Block_8: resolveBlock({"type":"Block","x":176,"y":120,"width":56,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_23","name":"","depth":0}),
// @ts-ignore
SlopeLeft_3: resolveSlopeLeft({"type":"SlopeLeft","x":144,"y":136,"width":32,"height":16,"flippedX":false,"flippedY":true,"uid":"55845599_24","name":"","depth":0}),
// @ts-ignore
SlopeLeft_4: resolveSlopeLeft({"type":"SlopeLeft","x":120,"y":152,"width":24,"height":32,"flippedX":false,"flippedY":true,"uid":"55845599_25","name":"","depth":0}),
// @ts-ignore
Block_9: resolveBlock({"type":"Block","x":88,"y":0,"width":280,"height":128,"flippedX":false,"flippedY":false,"uid":"55823268_26","name":"","depth":0}),
// @ts-ignore
Block_10: resolveBlock({"type":"Block","x":88,"y":128,"width":248,"height":8,"flippedX":false,"flippedY":false,"uid":"55823268_27","name":"","depth":0}),
// @ts-ignore
Block_11: resolveBlock({"type":"Block","x":88,"y":136,"width":56,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_28","name":"","depth":0}),
// @ts-ignore
Block_12: resolveBlock({"type":"Block","x":264,"y":128,"width":72,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_29","name":"","depth":0}),
// @ts-ignore
Block_13: resolveBlock({"type":"Block","x":296,"y":136,"width":40,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_30","name":"","depth":0}),
// @ts-ignore
Block_14: resolveBlock({"type":"Block","x":0,"y":0,"width":88,"height":224,"flippedX":false,"flippedY":false,"uid":"55823268_31","name":"","depth":0}),
// @ts-ignore
Block_15: resolveBlock({"type":"Block","x":0,"y":288,"width":88,"height":32,"flippedX":false,"flippedY":false,"uid":"55823268_32","name":"","depth":0}),
// @ts-ignore
Door: resolveDoor({"type":"Door","x":230,"y":194,"flippedX":false,"flippedY":false,"uid":"55913988_33","levelName":"VolcanoShopInn","checkpointName":"FromUpper","name":"","depth":0}),
// @ts-ignore
Door_1: resolveDoor({"type":"Door","x":159,"y":256,"flippedX":false,"flippedY":false,"uid":"55913988_34","levelName":"VolcanoShopInn","checkpointName":"","name":"","depth":0}),
FromInn: {"type":"Checkpoint","x":210,"y":226,"flippedX":false,"flippedY":false,"uid":"55940370_35","name":"FromInn","faceRight":false,"depth":0},
FromShop: {"type":"Checkpoint","x":208,"y":288,"flippedX":false,"flippedY":false,"uid":"55940370_36","name":"FromShop","faceRight":true,"depth":0},
// @ts-ignore
PubWindow: resolveRegion({"type":"Region","x":200,"y":248,"width":40,"height":24,"flippedX":false,"flippedY":false,"uid":"25971607_37","name":"PubWindow","depth":0}),
// @ts-ignore
PipeHorizontal: resolvePipeHorizontal({"type":"PipeHorizontal","x":156,"y":226,"width":104,"flippedX":false,"flippedY":false,"uid":"55841307_38","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_1: resolvePipeHorizontal({"type":"PipeHorizontal","x":199,"y":185,"width":56,"flippedX":false,"flippedY":false,"uid":"55841307_39","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_2: resolvePipeHorizontal({"type":"PipeHorizontal","x":168,"y":193,"width":24,"flippedX":false,"flippedY":false,"uid":"55841307_40","visible":false,"name":"","depth":0}),
// @ts-ignore
Door_2: resolveDoor({"type":"Door","x":456,"y":256,"flippedX":false,"flippedY":false,"uid":"55913988_41","levelName":"VolcanoTemple","checkpointName":"","name":"","depth":0}),
FromTemple: {"type":"Checkpoint","x":432,"y":288,"flippedX":false,"flippedY":false,"uid":"55940370_42","name":"FromTemple","faceRight":false,"depth":0},
// @ts-ignore
PipeHorizontal_3: resolvePipeHorizontal({"type":"PipeHorizontal","x":342,"y":246,"width":180,"flippedX":false,"flippedY":false,"uid":"55841307_44","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_4: resolvePipeHorizontal({"type":"PipeHorizontal","x":367,"y":204,"width":129,"flippedX":false,"flippedY":false,"uid":"55841307_45","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_5: resolvePipeHorizontal({"type":"PipeHorizontal","x":391,"y":162,"width":81,"flippedX":false,"flippedY":false,"uid":"55841307_46","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_6: resolvePipeHorizontal({"type":"PipeHorizontal","x":414,"y":120,"width":35,"flippedX":false,"flippedY":false,"uid":"55841307_47","visible":false,"name":"","depth":0}),
// @ts-ignore
PipeHorizontal_7: resolvePipeHorizontal({"type":"PipeHorizontal","x":425,"y":99,"width":13,"flippedX":false,"flippedY":false,"uid":"55841307_48","visible":false,"name":"","depth":0}),
// @ts-ignore
Block_16: resolveBlock({"type":"Block","x":304,"y":267,"width":48,"height":24,"flippedX":false,"flippedY":false,"uid":"55823268_49","name":"","depth":0}),
// @ts-ignore
SlopeLeft_5: resolveSlopeLeft({"type":"SlopeLeft","x":352,"y":267,"width":64,"height":32,"flippedX":false,"flippedY":false,"uid":"55845599_50","name":"","depth":0}),
// @ts-ignore
SlopeRight_6: resolveSlopeRight({"type":"SlopeRight","x":240,"y":267,"width":64,"height":32,"flippedX":false,"flippedY":false,"uid":"55824435_51","name":"","depth":0}),
// @ts-ignore
ValuableOrange: resolveValuableOrange({"type":"ValuableOrange","x":495.0926416251212,"y":157.99299500729916,"flippedX":false,"flippedY":false,"uid":"56004563_52","name":"","depth":0}),
// @ts-ignore
Gate_1: resolveGate({"type":"Gate","x":400,"y":0,"width":64,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_53","levelName":"VolcanoAbove","checkpointName":"FromTown","name":"","depth":0}),
FromAbove: {"type":"Checkpoint","x":432,"y":72,"flippedX":false,"flippedY":false,"uid":"55940370_54","name":"FromAbove","faceRight":true,"depth":0},
// @ts-ignore
Gate_2: resolveGate({"type":"Gate","x":0,"y":240,"width":32,"height":32,"flippedX":false,"flippedY":false,"uid":"55920197_55","levelName":"VolcanoBossArena","checkpointName":"FromTown","name":"","depth":0}),
FromBossArena: {"type":"Checkpoint","x":72,"y":272,"flippedX":false,"flippedY":false,"uid":"55940370_56","name":"FromBossArena","faceRight":true,"depth":0},
// @ts-ignore
Sign_1: resolveSign({"type":"Sign","x":72,"y":272,"flippedX":false,"flippedY":false,"uid":"86706091_57","title":"Lava","message":"Danger! Lava pools ahead.","name":"","depth":0}),
// @ts-ignore
Door_3: resolveDoor({"type":"Door","x":607,"y":248,"flippedX":false,"flippedY":false,"uid":"55913988_58","levelName":"VolcanoOracle","checkpointName":"FromTown","name":"","depth":0}),
// @ts-ignore
Block_17: resolveBlock({"type":"Block","x":573,"y":280,"width":77,"height":16,"flippedX":false,"flippedY":false,"uid":"55823268_59","name":"","depth":0}),
// @ts-ignore
PipeHorizontal_8: resolvePipeHorizontal({"type":"PipeHorizontal","x":573.4697670912739,"y":237.20527954834742,"width":76,"flippedX":false,"flippedY":false,"uid":"55841307_60","visible":false,"name":"","depth":0}),
// @ts-ignore
SlopeLeft_6: resolveSlopeLeft({"type":"SlopeLeft","x":649,"y":280,"width":16,"height":16,"flippedX":false,"flippedY":false,"uid":"55845599_61","name":"","depth":0}),
FromOracle: {"type":"Checkpoint","x":644,"y":280,"flippedX":false,"flippedY":false,"uid":"55940370_62","name":"FromOracle","faceRight":true,"depth":0}
};
}
};