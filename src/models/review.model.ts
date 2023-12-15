// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const review = sequelizeClient.define(
    'reviews',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
          max: 5,
        },
      },
      storyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'stories',
          key: 'id',
        },
      },
    },
    {
      hooks: {
        beforeCount(options: any): HookReturn {
          options.raw = true;
        },
      },
    }
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (review as any).associate = function (models: any): void {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
    review.belongsTo(models.stories)
  };

  return review;
}
