import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
// 하단 => 엔티티, 디비 접속 후 테이블로 변경되야 테이블
export class Board extends BaseEntity {
  // 기본키 @PrimaryColumn
  // 자동으로 만드는 기본키 @PrimaryGeneratedColumn
  // 숫자 1씩 증가: @PrimaryGeneratedColumn("increment")
  // 유효 아이디(랜덤한 16자리 숫자):  @PrimaryGeneratedColumn("uuid")
  @PrimaryGeneratedColumn("increment")
  id!: number;

  // 타입 지정 방식
  // 변수!: 꼭 있어야 하는 것
  @Column({ type: "text" })
  writer!: string;
  @Column({ type: "text" })
  title!: string;
  @Column({ type: "text" })
  contents!: string;

  // 없어도 되는 것 : 변수?: 타입 => contents?: string;

  // BaseEntity부터 상속받자
  // power!: number;
  // attack() {}

  // find() {}
}
