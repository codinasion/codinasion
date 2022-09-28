def volumeOfACuboid[T](wid: T, len: T,hei:T)(implicit ev: Numeric[T])= ev.times(wid,ev.times(len,hei))

volumeOfACuboid(1,2,3)
volumeOfACuboid(1L,2L,3L)
volumeOfACuboid(1.15,2.0,2.0)
volumeOfACuboid(1.15f,2.0f,2.0f)

