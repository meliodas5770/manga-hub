import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  owner?: StringFilter;
  startDate?: DateTimeNullableFilter;
};
