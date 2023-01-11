const { Model, DataTypes } = require("sequelize");
const connection = require("./connection");

class Plalist extends Model {}

Plalist.init(
  { Playlist_name:DataTypes.STRING,
    style: DataTypes.STRING,
    artist: {
        type: DataTypes.STRING,
        unique:true,
    },
    Music_name: DataTypes.STRING,

  },
  {
    sequelize: connection,
  }
);

module.exports = Plalist;
