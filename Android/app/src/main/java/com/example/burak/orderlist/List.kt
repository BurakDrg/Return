package com.example.burak.orderlist

import android.os.Bundle
import android.support.constraint.ConstraintLayout
import android.support.v4.app.Fragment
import android.support.v7.widget.DividerItemDecoration
import android.support.v7.widget.LinearLayoutManager
import android.support.v7.widget.RecyclerView
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import kotlinx.android.synthetic.main.list_layout.*

class List : Fragment(), View.OnClickListener{

    private val rvAdapter = RvAdapter(("").map {""}.toMutableList())

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {

        val rootView = inflater.inflate(R.layout.list_layout, container, false)
        val additem = rootView.findViewById(R.id.addItem) as TextView
        val recyclerview = rootView.findViewById(R.id.recyclerView) as RecyclerView

        additem.setOnClickListener(this)
        recyclerview.addItemDecoration(DividerItemDecoration(activity, DividerItemDecoration.VERTICAL))
        recyclerview.layoutManager = LinearLayoutManager(activity)
        recyclerview.adapter = rvAdapter

        return rootView
    }

    override fun onClick(v: View) {
        when (v.id) {
            R.id.addItem -> {
                rvAdapter.addItem("New item")
            }
        }
    }
}